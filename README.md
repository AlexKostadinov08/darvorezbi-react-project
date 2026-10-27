# Darvorezbi - React SPA

My project for the SoftUni ReactJS Regular Exam 2026.

Darvorezbi is a small catalog of handmade wood carvings - figures and wall panels. Anyone can browse the catalog and open an item. Registered users can add their own carvings, edit or delete them, like other people's work and leave comments.

- **Live demo:** https://darvorezbi-site-softuni.alexsm2206.workers.dev/
- **Repository:** https://github.com/AlexKostadinov08/darvorezbi-react-project
- **Demo account:** `demo@darvorezbi.bg` / `qwerty123`

## Design

Darvorezbi is a business idea of mine - a place for handmade wood carvings - that I may keep developing after the course. For this project I built its look as a small design system: a warm walnut and ivory palette, Playfair Display for headings, Manrope for text, and shared spacing and shadows. All of it lives in plain CSS files, with design tokens as CSS variables.
Note: the carousel on the home page is just static list in the codebase which i liked as a design purpose. The catalog itself, the details, likes and comments all come from an API.

## Tech stack

React 19, React Router, Vite, Supabase (PostgreSQL, Auth, Row Level Security), plain external CSS, ESLint.

## Run locally

```bash
npm install
npm run dev
```

You need a `.env.local` file in the root folder with your Supabase project details:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_KEY=your_supabase_publishable_key
```

The app runs on `http://localhost:5173`. Other commands: `npm run build`, `npm run preview`, `npm run lint`.

## Project structure

```
src/
├── components/   Header, Footer, Comments
├── contexts/     AuthContext - the logged-in user, shared across the app
├── guards/       PrivateGuard and GuestGuard
├── pages/        Home, Catalog, Details, Create, Edit, Login, Register, NotFound
├── services/     All Supabase requests (products, likes, comments)
├── styles/       Global CSS - design tokens, base styles, UI elements, forms
├── utils/        Form validation
├── App.jsx       Routes
└── main.jsx
```

Components never call Supabase directly - they go through the service files. More details in [architecture.md](./architecture.md).

---

# Functional Guide

## 1. Project Overview

**Application Name:** Darvorezbi

**Application Category / Topic:** Catalog of handmade wood carvings (product showcase with user-submitted items)

**Main Purpose:** Darvorezbi is a place where wood carvers can show their work. Visitors browse a catalog of figures and wall panels and open each item to see the details, likes and comments. Registered users can publish their own carvings, manage them, and react to other people's work with likes and comments.

## 2. User Access & Permissions

### Guest (Not Authenticated)

- **Available pages / routes:** Home (`/`), Catalog (`/catalog`), Details (`/catalog/:productId`), Login (`/login`), Register (`/register`) and the 404 page.
- **Public data shown:** all carvings with image, title, category, price and description; the author's name; the number of likes; all comments. The like button and the comment form are replaced by a "Влез" (log in) prompt.

### Authenticated User

- **Main sections / pages:** everything a guest sees, plus Add item (`/create`). Login and Register are no longer available.
- **Details pages:** the same details page, but the user can like other people's carvings and write comments.
- **Create / Edit / Delete actions:** any logged-in user can create a carving. Only the author sees the Edit and Delete buttons on their own item and can open `/catalog/:productId/edit`. The author can't like their own item.

| | Guest | Logged-in user | Author of the item |
|---|---|---|---|
| Browse catalog and details | yes | yes | yes |
| See likes and comments | yes | yes | yes |
| Add a new item | - | yes | yes |
| Like an item | - | yes | no |
| Comment | - | yes | yes |
| Edit / Delete the item | - | - | yes |

## 3. Authentication & Session Handling

### Authentication Flow

- **When the app loads:** `AuthProvider` wraps the whole app. On mount it calls `supabase.auth.getSession()` and saves the current user (or `null`) in state. Until this finishes, `isLoading` is `true`.
- **How authentication status is checked:** components read `user` from `AuthContext`. `AuthProvider` also subscribes to `onAuthStateChange`, so every login or logout updates `user` right away - the header switches between the login and logout icon, and the "Добави изделие" link appears or disappears.
- **On successful login or registration:** Login calls `signInWithPassword`, Register calls `signUp`. If Supabase returns no error, the user is redirected to the home page.
- **On logout:** the logout button in the header calls `supabase.auth.signOut()` and redirects to the home page. `user` becomes `null` through the same auth listener.

### Session Persistence

- **How the session is stored:** Supabase keeps the session token in the browser's localStorage. The app keeps the current user in React Context (`AuthContext`).
- **Automatic login after refresh:** on every page load `getSession()` reads the saved session, so the user stays logged in. The route guards wait for `isLoading` to become `false` before deciding, so a refresh on a private page doesn't send a logged-in user to the login page.

## 4. Routing Structure

### Route Guards Logic

Two guards, both used as layout routes in `App.jsx`:

- **PrivateGuard** wraps `/create` and `/catalog/:productId/edit`. A guest is redirected to `/login`.
- **GuestGuard** wraps `/login` and `/register`. A logged-in user is redirected to `/`.

Each guard renders `<Outlet />` when access is allowed and `<Navigate />` when it isn't.

### Main Routes

| Path | Page | Access |
|---|---|---|
| `/` | Home | everyone |
| `/catalog` | Catalog | everyone |
| `/catalog/:productId` | Details | everyone |
| `/create` | Add item | logged-in users |
| `/catalog/:productId/edit` | Edit item | logged-in users, author only |
| `/login`, `/register` | Login, Register | guests only |
| `*` | 404 page | everyone |

Eight pages in total. The Header and Footer stay on every page and only the content in `<main>` changes.

### Nested & Parameterized Routes

- **Nested routing:** yes - the guards are layout routes without a path, and the protected routes are their children.
- **URL parameters:** `/catalog/:productId` and `/catalog/:productId/edit`. The catalog also reads a query parameter, `/catalog?search=...`.

## 5. List → Details Flow

### Catalog / List Page

- **Data displayed:** all carvings from the database, newest first. Each card shows the image, a category badge, title, a short description and the price.
- **Interaction:** a search field filters the list by title, category or description as you type. The search term is kept in the URL (`?search=...`), so the search icon in the header leads to the same results and they survive a refresh. A counter shows how many items match, and there is an empty state with a "Покажи всички" button when nothing is found.

### Details Page

- **Navigation:** each catalog card is a `<Link>` to `/catalog/:productId`. After creating or editing an item, the app navigates there with `useNavigate`. The home page carousel also links to item details.
- **Route parameters:** `productId` is read with `useParams` and used to load the item, its likes and its comments from Supabase. If the parameter changes, the data is loaded again.

## 6. Data Source & Backend

### Backend Type

Real backend: **Supabase** - a hosted Backend-as-a-Service similar to Firebase, with a PostgreSQL database, authentication and Row Level Security. There is no custom server to deploy.

Tables:

- `products` - the carvings;
- `likes` - one row per like;
- `comments` - one row per comment.

Every table has a `user_id` column filled in by the database (`auth.uid()`), so the client can't fake who created a row. Row Level Security allows everyone to read, logged-in users to insert their own rows, and only the owner to update or delete. Even a direct API call can't change someone else's data.

## 7. Data Operations (CRUD)

The CRUD collection is `products`.

### Create (POST)

A logged-in user opens "Добави изделие" from the header and fills in title, category, price, image URL and description. After validation the item is inserted, the author's name is saved with it, and the user is taken to the new item's details page.

### Read (GET)

Data is fetched in `useEffect` hooks and displayed on the Catalog page (all items) and the Details page (one item, its likes and comments).

### Update (PUT/PATCH)

The author clicks "Редактирай" on the details page. The edit form opens already filled in with the current values. If someone who isn't the author opens the edit URL directly, they are redirected back to the details page. After saving, the app navigates to the details page, which loads the updated item, so the changes are visible right away.

### Delete

The author clicks "Изтрий" and confirms in a dialog. The item is removed and the user is taken to the catalog, which loads the list again without the deleted item.

## 8. Forms & Validation

### Forms Used

- Register
- Login
- Create item
- Edit item (same fields and validation as Create)
- Add comment
- Search (catalog search field and the search in the header)

### Validation Rules

- **Title:** required, at least 3 characters (spaces at the start and end don't count).
- **Price:** must be a number greater than 0.
- **Image URL:** must start with `http`.
- **Description:** at least 10 characters.
- **Category:** one of the options must be selected.
- **Password (Register) - several rules:** all fields are required, at least 6 characters, and "repeat password" must match.
- **Comment:** the "Публикувай" button stays disabled while the text is empty or only spaces.

On Create and Edit the errors appear under each invalid field and nothing is sent until the form is valid.

## 9. React-Specific Techniques

### Hooks & Component Lifecycle

- **Hooks used:**
  - `useState` - form values, loaded data, loading and error states;
  - `useEffect` - loading data, the auth listener;
  - `useContext` - reading the current user;
  - `useParams` - Details, Edit;
  - `useNavigate` - redirects after login, create, edit and delete;
  - `useSearchParams` - catalog search.
- **Mount / update / unmount example:** in Details, the effect runs on **mount** and loads the item and its likes. It runs again on **update** whenever `productId` in the URL changes. Its cleanup function runs on **unmount**, or before the next run, and calls `controller.abort()` to cancel requests that haven't finished. `AuthProvider` does the same with the auth listener and calls `subscription.unsubscribe()` on unmount.

### Context API

`AuthContext` shares `user`, `logout` and `isLoading`. It is consumed by:

- **Header:** login/logout icon and the "Добави изделие" link;
- **PrivateGuard and GuestGuard;**
- **Create:** the author's name;
- **Edit:** the owner check;
- **Details:** owner buttons and likes;
- **Comments:** comment form and author name.

### Component Styling

Plain external CSS files. Global styles (design tokens, base styles, UI elements, forms) are in `src/styles/` and imported once in `main.jsx`. Each page or component imports its own CSS file, for example `Catalog.css`, `Details.css` and `Comments.css`.

## 10. Typical User Flow

1. A visitor opens the home page and goes to the catalog, or searches for "петле" from the header.
2. They open an item and see its details, likes and comments, then register an account.
3. Logged in, they like someone else's carving, leave a comment, and add their own carving with "Добави изделие".
4. Later they open their item, edit the price, and finally delete it. Then they log out.

## 11. Error & Edge Case Handling

- **Authentication errors:** wrong credentials, an existing email, or invalid register data show a message to the user, and nothing breaks. Guests who open a private page are sent to login. Logged-in users who open Login or Register are sent home. A non-author who opens an edit URL is sent back to the details page.
- **Network or data errors:**
  - every page that loads data shows a spinner while waiting and an error message if the request fails;
  - on Create and Edit a server error is shown above the button, and the button is disabled while the request runs, so nothing is sent twice;
  - failed likes, comments or deletes show an alert instead of crashing the page;
  - requests are cancelled with `AbortController` when the user leaves a page.
- **Empty or missing data states:**
  - an empty catalog shows "Още няма изделия" with a link to add one;
  - a search without results shows "Няма намерени изделия";
  - an item without comments shows "Още няма коментари";
  - a missing item (for example `/catalog/99999`) shows "Изделието не беше намерено" with a link back to the catalog;
  - any unknown URL shows the 404 page.

---

## Demo account

- Email: `demo@darvorezbi.bg`
- Password: `qwerty123`

## Deployment

The frontend is deployed on Cloudflare Workers as static assets. Every push to `main` builds and deploys the app automatically, and `wrangler.jsonc` tells Cloudflare to return `index.html` for any path, so links like `/catalog/5` work on refresh. The backend is Supabase, so there is no separate server to deploy. Supabase pauses free projects after a week without activity, so a small GitHub Actions workflow (`.github/workflows/keep-alive.yml`) pings the database on a schedule to keep it awake.
