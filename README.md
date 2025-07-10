# DevSpark

Welcome to **DevSpark** — a full-stack project showcasing a modern WordPress backend paired with a Next.js frontend. This repository contains two main parts:

- **wordpress/** — The WordPress site powering content management, REST API, and backend logic.
- **next/** — The Next.js app providing a fast, modern, React-based frontend consuming the WordPress REST API.

---

## Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn
- PHP & WordPress installed locally (for backend development)
- MySQL database for WordPress
- Git

---

## Setup

### WordPress Backend

1. Navigate to `wordpress/` directory.
2. Configure WordPress with your local environment (e.g., `wp-config.php`).
3. Install necessary plugins and import demo data if any.
4. Start your local server (e.g., via MAMP, XAMPP, or Docker).

### Next.js Frontend

1. Navigate to `next/` directory:
    ```bash
    cd next
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create `.env.local` file for environment variables (example):
    ```env
    NEXT_PUBLIC_API_URL=http://localhost/wordpress
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```
5. Open your browser at [http://localhost:3000](http://localhost:3000)

---

## Build & Production

### Next.js Production Build

From the `next/` directory:

```bash
npm run build
npm run start
