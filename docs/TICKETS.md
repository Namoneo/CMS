# CMS – Tickets / Issues

Use this list to create issues in GitHub (or your tracker). Copy each block as a new issue.

---

## Epic: Foundation

### TICKET-001 – Frontend routing and layout
**Title:** Add Angular routes and basic layout for client and admin  
**Labels:** frontend, enhancement  
**Description:**
- Configure `provideRouter()` with routes: `/` (home), `/posts`, `/posts/:slug`, `/pages`, `/pages/:slug`, `/admin` (and admin children).
- Add a simple layout: shell with header/nav, main outlet, footer.
- Ensure nav links (Home, Posts, Pages, Admin) resolve to real routes; add placeholder components for each so the app does not show a blank outlet.

**Acceptance criteria:**
- [ ] Navigating to `/`, `/posts`, `/pages`, `/admin` renders a dedicated component (can be placeholder).
- [ ] Post and page detail routes (`/posts/:slug`, `/pages/:slug`) exist and render a placeholder.

---

### TICKET-002 – API client and environment config
**Title:** Add frontend API client service and environment config  
**Labels:** frontend, enhancement  
**Description:**
- Add environment config (e.g. `environment.ts` or `app.config.ts`) with `apiUrl` (e.g. `http://localhost:3000`).
- Create a shared API client service (or minimal services per resource) that use `HttpClient` and `apiUrl` to call backend endpoints: `GET/POST/PUT/DELETE /api/posts`, `/api/pages`, `/api/categories`, `/api/auth/login`, `/api/auth/register`, `/api/auth/me` (with auth header where needed).
- Optionally add an HTTP interceptor to attach the JWT and handle 401 (e.g. redirect to login).

**Acceptance criteria:**
- [ ] Frontend can call all existing backend API routes using a configurable base URL.
- [ ] Auth endpoints and protected endpoints can be called with a bearer token.

---

### TICKET-003 – Auth state and login/register UI
**Title:** Implement auth state and login/register screens  
**Labels:** frontend, auth, enhancement  
**Description:**
- Add a simple auth state (e.g. service + signals or minimal store) that holds current user and token (from login/register), persists token (e.g. localStorage), and exposes “is logged in” and “current user”.
- Build login and register pages (reactive forms, validation) that call `/api/auth/login` and `/api/auth/register`, then update auth state and redirect (e.g. to `/admin`).
- Add a route guard that redirects unauthenticated users from `/admin` to login.

**Acceptance criteria:**
- [ ] User can register and log in; token and user are stored and used for subsequent requests.
- [ ] Visiting `/admin` while not logged in redirects to login; after login, user can access admin.

---

## Epic: Admin panel

### TICKET-004 – Admin layout and dashboard
**Title:** Admin panel layout and dashboard  
**Labels:** frontend, admin, enhancement  
**Description:**
- Create an admin layout: sidebar or top nav with links to “Dashboard”, “Posts”, “Pages”, “Categories”, “Log out”.
- Add an admin dashboard page (e.g. at `/admin`) with summary cards or links: total posts, total pages, recent activity (can be placeholders or real counts from API).
- Ensure admin routes are under `/admin` and use the auth guard from TICKET-003.

**Acceptance criteria:**
- [ ] `/admin` shows a dashboard with navigation to Posts, Pages, Categories.
- [ ] Only authenticated users can see the admin layout and dashboard.

---

### TICKET-005 – Admin: manage posts (list, create, edit, delete)
**Title:** Admin CRUD for posts  
**Labels:** frontend, admin, enhancement  
**Description:**
- List page: table or list of posts (title, slug, status, date), “New post” button, edit/delete actions.
- Create/Edit form: title, slug, content (rich text or textarea), excerpt, status (draft/published), optional category; save via API (POST/PUT).
- Delete: confirm and call DELETE `/api/posts/:id`.
- Use the API client from TICKET-002; show loading and error states.

**Acceptance criteria:**
- [ ] Admin can list, create, edit, and delete posts via the UI; changes persist via the backend API.

---

### TICKET-006 – Admin: manage pages (list, create, edit, delete)
**Title:** Admin CRUD for pages  
**Labels:** frontend, admin, enhancement  
**Description:**
- Same as TICKET-005 but for pages: list, create, edit, delete using `/api/pages`.
- Form fields: title, slug, content, status (draft/published), optional ordering or parent if the backend supports it.

**Acceptance criteria:**
- [ ] Admin can list, create, edit, and delete pages via the UI; changes persist via the backend API.

---

### TICKET-007 – Admin: manage categories
**Title:** Admin CRUD for categories  
**Labels:** frontend, admin, enhancement  
**Description:**
- List categories (name, slug, optional post count), “New category” button, edit/delete actions.
- Create/Edit form: name, slug; save via `/api/categories`.
- Delete with confirmation; handle “in use” if backend returns an error.

**Acceptance criteria:**
- [ ] Admin can list, create, edit, and delete categories; posts can be associated with categories if the API supports it.

---

## Epic: Client-facing site

### TICKET-008 – Public home page
**Title:** Public home page  
**Labels:** frontend, client, enhancement  
**Description:**
- Build the public home page at `/`: hero or welcome section, optional “latest posts” list (e.g. first 5 from API), link to “All posts” and “Pages”.
- Use the API client to fetch published posts; handle empty state.

**Acceptance criteria:**
- [ ] Home page loads and displays content from the API (or friendly empty state).

---

### TICKET-009 – Public posts list and post detail
**Title:** Public posts list and post detail pages  
**Labels:** frontend, client, enhancement  
**Description:**
- Posts list at `/posts`: paginated or infinite list of published posts (title, excerpt, date, link to detail).
- Post detail at `/posts/:slug`: fetch by slug (`/api/posts/slug/:slug`), render title and content; 404 if not found or not published.

**Acceptance criteria:**
- [ ] Visitors can see all published posts and open a post by slug; unpublished posts are not shown.

---

### TICKET-010 – Public pages list and page detail
**Title:** Public pages list and page detail  
**Labels:** frontend, client, enhancement  
**Description:**
- Pages list at `/pages`: list of published pages (title, link).
- Page detail at `/pages/:slug`: fetch by slug, render title and content; 404 if not found or not published.

**Acceptance criteria:**
- [ ] Visitors can see published pages and open a page by slug.

---

## Epic: Backend improvements (optional)

### TICKET-011 – Publish/draft and filtering
**Title:** Backend: post/page status (draft/published) and list filters  
**Labels:** backend, enhancement  
**Description:**
- Add `status` (e.g. DRAFT, PUBLISHED) to Post and Page (Prisma + migration) if not present.
- List endpoints: support query params (e.g. `?status=published`) so client can request only published content; admin can see all or filter by status.
- Ensure slug endpoints return 404 for draft content when called without auth (or document behavior).

**Acceptance criteria:**
- [ ] Posts and pages have status; API supports filtering by status; public slug endpoints only return published content (or equivalent).

---

### TICKET-012 – Media library (backend)
**Title:** Backend: media upload and storage  
**Labels:** backend, enhancement  
**Description:**
- Add a Media or Asset model (e.g. filename, mimeType, size, url/path) and an upload endpoint (multipart file upload).
- Store files on disk or in object storage; save metadata in DB and return URL for use in content.
- Optional: serve uploaded files or redirect to storage URL.

**Acceptance criteria:**
- [ ] Admin (or API) can upload files and get back a URL; stored files are associated with a record in the DB.

---

### TICKET-013 – Media library (admin UI)
**Title:** Admin: media library UI  
**Labels:** frontend, admin, enhancement  
**Description:**
- Admin page to list uploaded media (image/name, size, date), upload new files, copy URL, optionally delete.
- Optional: image picker in post/page editor to insert media URLs into content.

**Acceptance criteria:**
- [ ] Admin can upload, list, and use media from the admin panel.

---

## Epic: Future / nice-to-have

### TICKET-014 – SEO settings
**Title:** SEO: meta title, description, and Open Graph  
**Labels:** frontend, backend, enhancement  
**Description:**
- Backend: add optional meta fields to Post/Page (metaTitle, metaDescription) and expose in API.
- Frontend: set document title and meta tags per route (e.g. using Angular title/meta services or SSR); support Open Graph for sharing.

**Acceptance criteria:**
- [ ] Each public post/page can have custom meta title/description; client updates document title and meta tags.

---

### TICKET-015 – Theme customization
**Title:** Theme customization (colors, logo)  
**Labels:** frontend, enhancement  
**Description:**
- Allow configuration of theme (e.g. primary color, logo URL) via admin or config; apply in the client (CSS variables or theme service).
- Optional: store theme settings in backend and load on app init.

**Acceptance criteria:**
- [ ] Admin or config can change theme options; public site reflects the chosen theme.

---

### TICKET-016 – Multi-language support
**Title:** Multi-language support (i18n)  
**Labels:** frontend, backend, enhancement  
**Description:**
- Backend: optional locale on Post/Page (or separate translation tables); API accepts locale and returns localized content.
- Frontend: Angular i18n or transloco; locale switcher; routes or query param for language (e.g. `/en/posts`, `/nl/posts`).

**Acceptance criteria:**
- [ ] Content can be stored and displayed in multiple languages; user can switch language on the client.

---

## Summary

| ID        | Epic           | Summary                          |
|-----------|----------------|----------------------------------|
| TICKET-001| Foundation     | Frontend routing and layout      |
| TICKET-002| Foundation     | API client and environment       |
| TICKET-003| Foundation     | Auth state and login/register    |
| TICKET-004| Admin panel    | Admin layout and dashboard       |
| TICKET-005| Admin panel    | Admin CRUD posts                 |
| TICKET-006| Admin panel    | Admin CRUD pages                 |
| TICKET-007| Admin panel    | Admin CRUD categories            |
| TICKET-008| Client site    | Public home page                 |
| TICKET-009| Client site    | Public posts list and detail     |
| TICKET-010| Client site    | Public pages list and detail     |
| TICKET-011| Backend        | Publish/draft and filtering      |
| TICKET-012| Backend        | Media upload (backend)           |
| TICKET-013| Admin panel    | Media library (admin UI)         |
| TICKET-014| Future         | SEO settings                     |
| TICKET-015| Future         | Theme customization              |
| TICKET-016| Future         | Multi-language support           |

Create these in [GitHub Issues](https://github.com/Namoneo/CMS/issues) (or your issue tracker) and use the table for prioritization and epics.
