# Darvorezbi - React SPA

My project for the SoftUni ReactJS Regular Exam 2026.

Darvorezbi is a small catalog of handmade wood carvings - figures and wall panels. Anyone can browse the catalog and open an item. Registered users can add their own carvings, edit or delete them, like other people's work and leave comments.

- **Live demo:** https://darvorezbi-site-softuni.alexsm2206.workers.dev/
- **Repository:** https://github.com/AlexKostadinov08/darvorezbi-react-project

## Design

I didn't want to invent a new look, so I reused the design of my real website, [darvorezbi.com](https://darvorezbi.com), an online store for handmade wood carvings. I moved its design system (walnut and ivory palette, Playfair Display and Manrope, spacing and shadows) from the WordPress theme into plain CSS files. The project doesn't depend on WordPress in any way. Pages the real site doesn't have (catalog, forms, comments, 404) were styled from scratch in the same style.

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

## Functional Guide

### Who can do what

| | Guest | Logged-in user | Author of the item |
|---|---|---|---|
| Browse the catalog and open details | yes | yes | yes |
| See likes and comments | yes | yes | yes |
| Add a new item | - | yes | - |
| Like an item | - | yes | no (own item) |
| Comment | - | yes | yes |
| Edit / Delete an item | - | - | yes |

### Routes

| Path | Page | Access |
|---|---|---|
| `/` | Home | everyone |
| `/catalog` | Catalog | everyone |
| `/catalog/:productId` | Details | everyone |
| `/create` | Add item | logged-in only |
| `/catalog/:productId/edit` | Edit item | logged-in only, author only |
| `/login`, `/register` | Login, Register | guests only |
| `*` | 404 page | everyone |

`PrivateGuard` sends guests to `/login`. `GuestGuard` sends logged-in users away from Login and Register. Both guards wait for the session check to finish first, so refreshing a protected page doesn't throw you out.

### Authentication

Login, register and logout go through Supabase Auth with email and password. When the app starts, `AuthProvider` reads the existing session and subscribes to auth changes (and unsubscribes when it unmounts). The current user and `logout` are shared through `AuthContext`, so the session survives a page refresh.

### Catalog and details

The catalog loads all items from Supabase, newest first. Clicking a card opens `/catalog/:productId`. The id is read with `useParams` and used to load that one item. If the id doesn't exist, the page shows a "not found" message with a link back to the catalog.

### CRUD

- **Create** - title, category, price, image URL and description. The item is linked to its author automatically.
- **Read** - catalog and details page.
- **Update** - the edit form opens already filled in. If someone who isn't the author opens the edit URL by hand, they're redirected back to the details page.
- **Delete** - asks for confirmation first, then returns to the catalog.

Ownership is checked in React (the buttons are shown only to the author) and again in the database with Row Level Security, so another user can't change the data even by calling the API directly.

### Likes and comments

Each like is a row in the `likes` table. The database allows only one like per user per item. Clicking the heart again removes the like. Comments are shown under each item. Logged-in users can add comments and delete their own.

### Validation

- **Register** - all fields required, password at least 6 characters, both passwords must match.
- **Item form** - title at least 3 characters, a category must be selected, price must be greater than 0, image URL must start with `http`, description at least 10 characters.

Errors are shown under each field. While a request is running, the submit button is disabled. Server errors are shown in a message instead of crashing the page.

### Loading, errors and cleanup

Every page that loads data shows a spinner while waiting and a message if the request fails. Requests in `useEffect` use an `AbortController`, which cancels them if the user leaves the page before they finish.

### Demo account

- Email: _demo email_
- Password: _demo password_

## Deployment

The frontend is deployed on Cloudflare Workers as static assets. Every push to `main` builds and deploys the app automatically, and `wrangler.jsonc` tells Cloudflare to return `index.html` for any path, so links like `/catalog/5` work on refresh. The backend is Supabase, so there is no separate server to deploy. Supabase pauses free projects after a week without activity, so a small GitHub Actions workflow (`.github/workflows/keep-alive.yml`) pings the database on a schedule to keep it awake.
