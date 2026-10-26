# Architecture

A short overview of how the Darvorezbi app is put together and why.

## The big picture

```
Browser (React SPA on Cloudflare Workers)
   │
   │  pages and components
   │        │
   │        ▼
   │  services/*.js   ← the only place that talks to Supabase
   │        │
   ▼        ▼
Supabase (PostgreSQL + Auth + Row Level Security)
```

There is no custom backend server. Supabase gives me the database, authentication and a REST API out of the box. Security rules live in the database itself (Row Level Security), so they apply no matter how the API is called.

## Folder structure

```
src/
├── App.jsx           All routes in one place
├── main.jsx          Mounts the app: StrictMode → BrowserRouter → AuthProvider → App
├── components/       Pieces used on several pages or inside a page
│   ├── header/       Navigation, search, login/logout button, mobile menu
│   ├── footer/
│   └── comments/     Comment list and form, used inside Details
├── pages/            One folder per route
│   ├── home/
│   ├── catalog/
│   ├── details/
│   ├── create/
│   ├── edit/
│   ├── notfound/
│   ├── Login.jsx
│   └── Register.jsx
├── contexts/
│   └── AuthContext.jsx   The logged-in user, shared with the whole app
├── guards/
│   ├── PrivateGuard.jsx  Only for logged-in users
│   └── GuestGuard.jsx    Only for guests (login, register)
├── services/
│   ├── supabase.js         Creates the Supabase client from env variables
│   ├── productsService.js  getAll, getOne, create, update, remove
│   ├── likesService.js     getLikes, like, unlike
│   └── commentsService.js  getComments, createComment
├── utils/
│   └── validateProduct.js  Validation for the create and edit forms
└── styles/              Global CSS: design tokens, base, UI elements, forms
```

Each page or component imports its own CSS file. Global styles are imported once in `main.jsx`.

## Data flow

Components never call Supabase directly. A page asks a service function for data, and the service returns plain data or throws an error:

```js
// productsService.js
export async function getOne(productId, signal) {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .abortSignal(signal)
        .single()

    if (error) throw error
    return data
}
```

This keeps the components focused on what to show, and if the backend ever changes, only the services need to be rewritten.

## Loading data in components

Every page that loads data follows the same pattern with `useEffect`:

1. Create an `AbortController`.
2. Call the service with `controller.signal`.
3. Save the result in state, or save the error message.
4. In the cleanup function, call `controller.abort()`.

The cleanup cancels the request if the user leaves the page before it finishes. It also matters in development, because React StrictMode mounts every component twice. The first, cancelled request must not show an error, so errors and loading changes are ignored when `controller.signal.aborted` is true.

Each page keeps three pieces of state for this: the data, `isLoading` and `error`. The JSX shows a spinner, an error message or the content depending on them.

## Authentication

`AuthProvider` wraps the whole app and does two things when it mounts:

- reads the existing session with `supabase.auth.getSession()`, so a refresh keeps you logged in;
- subscribes to `onAuthStateChange`, so login and logout anywhere in the app update the user immediately. The subscription is removed in the cleanup function.

It shares `{ user, logout, isLoading }` through `AuthContext`. Any component reads it with `useContext(AuthContext)`.

`isLoading` exists for the guards. Without it, on refresh the guard would see `user = null` for a split second (before the session is read) and send a logged-in user to the login page.

## Routing and guards

| Path | Page | Guard |
|---|---|---|
| `/` | Home | - |
| `/catalog` | Catalog | - |
| `/catalog/:productId` | Details | - |
| `/catalog/:productId/edit` | Edit | PrivateGuard |
| `/create` | Create | PrivateGuard |
| `/login`, `/register` | Login, Register | GuestGuard |
| `*` | NotFound | - |

The guards are layout routes. They render `<Outlet />` when access is allowed and `<Navigate />` when it isn't, so the protected routes are simply nested inside them in `App.jsx`.

Ownership on the Edit page is checked separately. After the product loads, if its `user_id` doesn't match the logged-in user, the page redirects to the details page.

## Database

| Table | Columns | Notes |
|---|---|---|
| `products` | id, created_at, user_id, author_name, title, category, price, description, image_url | `user_id` defaults to `auth.uid()` |
| `likes` | id, created_at, product_id, user_id | unique on (product_id, user_id) |
| `comments` | id, created_at, product_id, user_id, author_name, content | |

`user_id` is filled in by the database from the logged-in user, so the client can't fake who created a row. `author_name` is stored next to it, so the app can show a name without reading the private users table.

### Row Level Security

- Everyone can read products, likes and comments.
- Only logged-in users can insert, and only rows where `user_id` is their own id.
- Only the owner can update or delete a product, and only the owner can remove their like.

The React app hides the Edit and Delete buttons from other users, but the real protection is these policies. Even a direct API call can't change someone else's data.

## Forms

Create and Edit are controlled forms. One `values` object holds all fields, and one `changeHandler` updates any field by its `name`. On submit:

1. `validate(values)` from `utils/validateProduct.js` returns an object with an error per invalid field.
2. If there are errors, they are shown under the fields and nothing is sent.
3. Otherwise the button is disabled while the request runs, and server errors are shown in a message above it.

## Deployment

- **Frontend:** Cloudflare Workers, static assets only. Every push to `main` runs `npm run build` and `npx wrangler deploy`. The Supabase URL and publishable key are build variables in Cloudflare, because Vite bakes them into the bundle at build time.
- **SPA routing:** `wrangler.jsonc` sets `not_found_handling` to `single-page-application`, so any unknown path returns `index.html` and React Router takes over. Without it, refreshing `/catalog/5` would return a 404.
- **Backend:** Supabase. Free projects pause after a week without activity, so a GitHub Actions workflow (`.github/workflows/keep-alive.yml`) pings the database on a schedule.
- **Secrets:** `.env.local` is in `.gitignore`. Only the publishable key is used in the browser, and it is safe there because of Row Level Security.
