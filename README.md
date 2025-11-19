# Product Catalog API

This is a simple Product Catalog API built with Express that serves a small in-memory list of products and a static frontend from the `public/` directory.

## Author

**Hujefa Khan**

## Installation & Setup Instructions

Follow these steps to clone the repository, install dependencies, run the server, and access the API and frontend.

### 1. How to clone the repository

Open a terminal and run:

```bash
git clone https://github.com/Ig-Huzaifa-Khan/product-catalog-api.git
cd product-catalog-api
```

### 2. How to install dependencies

Install the Node dependencies:

```bash
npm install
```

This project depends on `express` (declared in `package.json`).

### 3. How to run the server

Start the server using the npm start script:

```bash
npm start
```

Or run directly with Node:

```bash
node server.js
```

By default the server listens on port `3000` (see `server.js`). The `npm start` script runs `node server.js`.

### 4. How to access the API and frontend

- Frontend (static): Open your browser to:

```
http://localhost:3000/
```

- API base URL:

```
http://localhost:3000
```

- Available API endpoints:

```
GET /products              -> returns list of products as JSON
GET /products/categories  -> returns available product categories
GET /products/in-stock    -> returns products with `inStock: true`
```

If your port `3000` is in use, change the `PORT` value in `server.js` and restart the server.

## Notes & Troubleshooting

- Ensure you have Node.js installed (Node 14+ recommended).
- If `npm install` fails, check your internet connection or try clearing npm cache: `npm cache clean --force`.
- To inspect or modify product data, edit `server.js` (the `products` array is in-memory).

## License

This project is licensed under the MIT License.

---


