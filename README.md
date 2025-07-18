# Web_Gallery
A full-stack Node.js web application built with Express.js, EJS, and Sequelize ORM using a MySQL backend. The application enables user authentication and secure CRUD operations for storing and managing personal assets like pictures, documents, passwords (AES encrypted), and events.

Deployed on AWS EC2 (Free Tier) with database hosted on Amazon RDS.

---

## 🚀 Features

- Secure user registration and login
- Session-based authentication
- AES-256 encrypted password storage
- Upload and manage pictures & documents
- Store and retrieve encrypted credentials
- Track events in a dashboard-style UI
- Flash messages for feedback
- Sequelize ORM integration
- EJS templating
- Form validation (client + server)
- Docker/local/EC2 ready
- AWS EC2 deployment (production)
- Amazon RDS for managed DB hosting

---

## 🏗️ Project Structure

my-secure-app/
├── config/ # DB configuration (Sequelize)
├── controllers/ # Route logic for all features
├── middleware/ # Authentication and validation logic
├── models/ # Sequelize models for all entities
├── public/ # Static files (CSS, JS, uploads)
├── routes/ # Express route definitions
├── utils/ # Custom utilities (e.g., encryption)
├── views/ # EJS templates for frontend
├── .env # Environment variables
├── .gitignore
├── server.js # App entry point
└── package.json



📁 Technologies Used
Backend: Node.js, Express.js, Sequelize

Frontend: EJS

Database: MySQL (local or RDS)

Auth: express-session, bcryptjs, connect-flash

Security: crypto (AES-256), express-validator

Dev Tools: PM2, Git, AWS EC2/RDS, Nginx

👨‍💻 Author
Eno-obong Bassey
Node.js Developer | BYU-Idaho Student
GitHub
