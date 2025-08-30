
## 📂 Project Structure

```
urlshortenerwebapp/       # Backend project (Spring Boot)
│   └── src/              # Backend source code
│── urlshortener/         # Frontend source code (React + TailwindCSS)
```

---

# 🔗 URL Shortener Web App

A minimal, full-stack URL shortener built with **Spring Boot**, **React**, and **PostgreSQL (pgAdmin)**.
Easily shorten long URLs and manage them efficiently with a sleek frontend and robust backend.

---

## 🚀 Tech Stack

| Layer    | Tech                 |
| -------- | -------------------- |
| Frontend | React + TailwindCSS  |
| Backend  | Spring Boot (Java)   |
| Database | PostgreSQL (pgAdmin) |
| Auth     | JWT (Optional)       |
| Tools    | Maven, JPA, Lombok   |

---

## 📦 Setup Guide

### ✅ Backend (Spring Boot)

1. **Clone the repo**

   ```bash
   git clone https://github.com/Rohitmishra7295/urlshortenerwebapp.git
   cd urlshortenerwebapp
   ```

2. **Configure `application.properties`** (`src/main/resources/application.properties`):

   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/urlshortener
   spring.datasource.username=postgres
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   base.url=http://localhost:8080/
   ```

3. **Run the backend**

   ```bash
   mvn spring-boot:run
   ```

---

### 🎨 Frontend (React + TailwindCSS)

1. Navigate to the frontend:

   ```bash
   cd ../urlshortener
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend:

   ```bash
   npm start
   ```

---

## 🗄 Database (PostgreSQL + pgAdmin)

* Create a database named `urlshortener`.
* Ensure pgAdmin is running and connected.
* Update credentials in `application.properties` if needed.

---

## ✨ Features

* Shorten long URLs
* Redirect to original URL
* RESTful API with Spring Boot
* PostgreSQL persistence
* (Optional) JWT authentication for users

---

## 👨‍💻 Author

**Rohit Mishra**
📧 [rohitmishra729595@gmail.com](mailto:rohitmishra729595@gmail.com)
🌐 [LinkedIn](https://www.linkedin.com/in/rohit-backenddev) | [GitHub](https://github.com/Rohitmishra7295)

---

⚡ Would you like me to add a **section with sample API requests/responses** (like `POST /api/shorten`, `GET /{shortUrl}`) so anyone testing the backend can try it instantly?
