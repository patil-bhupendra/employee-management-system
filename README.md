# Employee Management System (EMS)

A full-stack Employee Management System built using **React**, **Node.js**, **Express**, and **MongoDB**, supporting **role-based access control**, attendance tracking, salary management, leave workflows, and holiday management.

This project is developed as part of a **Full-Stack Technical Assignment** and demonstrates end-to-end ownership of frontend, backend, authentication, and business logic.

---

## 🚀 Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* Axios
* Tailwind CSS
* Role-based route protection

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Role-based authorization middleware

### Database

* MongoDB (NoSQL)

---

## 👥 User Roles

| Role      | Access Level                 |
| --------- | ---------------------------- |
| OWNER     | Full system access           |
| TEAM_LEAD | Team-level attendance access |
| EMPLOYEE  | Self-service access          |

---

## ✨ Features

### 🔐 Authentication & Authorization

* JWT-based login system
* Role-based protected routes
* Secure API access using middleware

---

### 👨‍💼 Employee Features

* View dashboard summary
* Mark daily attendance
* View monthly attendance count
* View salary details
* Apply for leave
* View holidays

---

### Owner Features

* View attendance of all employees
* Calculate employee salaries
* View leave requests
* Manage holidays

---

### 📅 Attendance System

* One attendance per employee per day
* Duplicate attendance prevention
* Attendance listing for Owner / Team Lead

---

### 💰 Salary Management

* Salary calculation by Owner
* Employee salary view
* Monthly salary summary

---

## 📁 Project Structure

### Frontend (`ems-frontend`)

```
src/
 ├─ pages/
 │   ├─ auth/
 │   ├─ dashboards/
 │   ├─ employee/
 │   ├─ attendance/
 │   ├─ salary/
 │   ├─ holidays/
 │
 ├─ components/
 │   ├─ ProtectedRoute.jsx
 │   ├─ RoleGuard.jsx
 │
 ├─ services/
 │   └─ api.js
 │
 └─ App.jsx
```

---

### Backend (`ems-backend`)

```
src/
 ├─ controllers/
 ├─ routes/
 ├─ models/
 ├─ middleware/
 ├─ config/
 └─ server.js
```

---

## 🧠 System Architecture Diagram

```
┌──────────────────┐
│   React Frontend │
│  (Vite + Router) │
└───────▲──────────┘
        │ Axios (JWT)
        ▼
┌──────────────────┐
│  Express Server  │
│  (Node.js API)   │
├──────────────────┤
│ Auth Middleware  │
│ Role Guard       │
└───────▲──────────┘
        │ Mongoose
        ▼
┌──────────────────┐
│    MongoDB       │
│ (Users, Salary, │
│  Attendance,    │
│  Leave, Holiday)│
└──────────────────┘
```

---

## 🔁 Data Flow

1. User logs in → JWT token generated
2. Token stored in `localStorage`
3. Protected routes validate token
4. RoleGuard validates role access
5. API requests sent with Authorization header
6. Backend validates → processes → responds

---

## ⚙️ Setup Instructions

### Backend

```bash
cd ems-backend
npm install
npm run dev
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### Frontend

```bash
cd ems-frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints (Sample)

| Method | Endpoint              | Access       |
| ------ | --------------------- | ------------ |
| POST   | /api/auth/login       | Public       |
| POST   | /api/attendance       | Employee     |
| GET    | /api/attendance       | Owner / Lead |
| GET    | /api/salary/my        | Employee     |
| POST   | /api/salary/calculate | Owner        |

---

## 📌 Evaluation Highlights

* End-to-end system design
* Clean project structure
* Secure authentication flow
* Role-based business logic
* Scalable architecture
* Real-world debugging handled

---

## 👨‍💻 Author

**Full Stack Developer (MERN)**
Hands-on experience with scalable web applications, authentication systems, and role-based dashboards.

---

## ✅ Status

✔ Assignment Completed
✔ Submission Ready
✔ Production-style architecture

---
