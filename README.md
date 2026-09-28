# 🛍️ Mini E-Commerce Website

A full-stack **Mini E-Commerce Website** built with **React + Node.js + Express + MongoDB**.

This project includes user authentication, JWT-based session handling, product management, validation, protected routes, and a responsive frontend.

---

## ✨ Features

* 🔐 User Registration & Login
* 🔄 Access Token & Refresh Token Authentication
* 🍪 HTTP-only Cookie for Refresh Token
* 👤 Get Current Logged-in User
* 🚪 Secure Logout
* 📦 Product CRUD Operations
* 🖼️ Product Image Upload
* 🛡️ Protected Product Routes
* ✅ Input Validation
* ⚠️ Field-level API Error Messages
* 📱 Responsive React Frontend

---

# ⚙️ Backend

The backend is divided mainly into two systems:

### 👤 User System

User data includes:

```text
name
email
password
confirmPassword
refreshToken
```

### 🔐 Authentication APIs

| Method | Endpoint                  | Access    |
| ------ | ------------------------- | --------- |
| POST   | `/api/auth/register`      | Public    |
| POST   | `/api/auth/login`         | Public    |
| POST   | `/api/auth/refresh-token` | Public    |
| POST   | `/api/auth/logout`        | Protected |
| GET    | `/api/auth/me`            | Protected |

### 🔑 Authentication Flow

After login, an **access token** is used for authenticated requests and a **refresh token** is stored in an HTTP-only cookie.

When the access token needs to be renewed:

```text
Refresh Token
      ↓
/api/auth/refresh-token
      ↓
New Access Token + Refresh Token
```

---

# 📦 Product APIs

Products can be viewed publicly, while creating, updating and deleting products require authentication.

| Method | Endpoint                   | Access       |
| ------ | -------------------------- | ------------ |
| POST   | `/api/products`            | 🔒 Protected |
| GET    | `/api/products`            | 🌍 Public    |
| GET    | `/api/products/:productID` | 🌍 Public    |
| PUT    | `/api/products/:productID` | 🔒 Protected |
| DELETE | `/api/products/:productID` | 🔒 Protected |

### Product Operations

**Create Product**

```text
POST /api/products
```

Requires authentication and supports product image upload.

**Get All Products**

```text
GET /api/products
```

**Get Single Product**

```text
GET /api/products/:productID
```

**Update Product**

```text
PUT /api/products/:productID
```

**Delete Product**

```text
DELETE /api/products/:productID
```

---

# 🛡️ Validation & Security

The project includes validation for:

* Name and email format
* Password strength
* Confirm password matching
* Required product fields
* Product route parameters
* Authentication-protected routes
* Field-level validation error responses

---

# 🎨 Frontend

The frontend is built with **React** and communicates with the backend APIs.

It provides:

* Authentication UI
* Product listing
* Product details
* Product creation
* Product editing
* Product deletion
* Protected pages
* API error handling

---

# 📁 Project Structure

```text
Mini-E-Commerce/
│
├── client/          # React Frontend
│
├── server/          # Node.js + Express Backend
│
└── README.md
```

---

## 🧑‍💻 Tech Stack

**Frontend**

`React` `React Router` `Redux` `Tailwind CSS`

**Backend**

`Node.js` `Express.js` `MongoDB` `Mongoose` `JWT` `Multer`

---

## 📌 Assignment

This project was developed as part of **Task 5 – Mini E-Commerce Assignment**, focusing on backend correctness, authentication, security, validation, API design, and frontend-backend integration.
