```
urlshortenerwebapp/
│── urlshortener/        # Backend project (Spring Boot)
│   └── src/             # Backend source code
│── frontend/            # Frontend project (React + TailwindCSS)
```

### **urlshortener/src → backend source code** 
### **frontend → frontend project folder**

# 🔗 URL Shortener Web App

A minimal, full-stack URL shortener built with **Spring Boot**, **React**, and **PostgreSQL (pgAdmin)**. Easily shorten long URLs and manage them efficiently with a sleek frontend and robust backend.

---

## 🚀 Tech Stack

| Layer      | Tech               |
|------------|--------------------|
| Frontend   | React + TailwindCSS |
| Backend    | Spring Boot (Java) |
| Database   | PostgreSQL (pgAdmin) |
| Auth       | JWT (Optional)     |
| Tools      | Maven, JPA, Lombok |

---

## 📦 Setup Guide

### ✅ Backend (Spring Boot)
1. Clone the repo:
   ```bash
   git clone https://github.com/Rohitmishra7295/urlshortenerwebapp.git
   cd backend

2.Configure application.properties:

spring.datasource.url=jdbc:postgresql://localhost:5432/urlshortener
spring.datasource.username=postgres
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
base.url=http://localhost:8080/

3.Run the app:
mvn spring-boot:run


Made with ❤️ by Rohit Mishra
📧 rohitmishra729595@gmail.com
