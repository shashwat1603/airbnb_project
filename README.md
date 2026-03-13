# 🏡 Airbnb Clone – Full Stack Web Application

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-Framework-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![EJS](https://img.shields.io/badge/EJS-Templates-red)
![License](https://img.shields.io/badge/License-MIT-blue)

An **Airbnb-inspired web application** where users can browse property listings, view details, book stays, leave reviews, and hosts can manage properties.

This project demonstrates **full-stack development using Node.js, Express, MongoDB, and EJS**, following a clean **MVC architecture** with authentication, cloud storage, and deployment.

---

# 📌 Project Overview

This application replicates several core Airbnb functionalities:

- 🏠 Browse and search property listings  
- 📄 View detailed listing pages with images and descriptions  
- 📅 Book stays for available listings  
- ⭐ Leave reviews and ratings  
- 👨‍💼 Hosts can create and manage listings  
- 🔐 User authentication and authorization  
- ☁️ Image upload with cloud storage  

The project was built to **demonstrate backend and full-stack development skills**, including database management, authentication, cloud integration, and deployment.

---

# 🛠 Tech Stack

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose ODM

## Frontend
- EJS Templates
- HTML
- CSS
- JavaScript

## Authentication
- Passport.js
- Express Sessions

## File Upload & Cloud Storage
- Multer
- Cloudinary

## Deployment
- Render

## Other Tools
- dotenv for environment configuration
- Express middleware
- MVC architecture

---

# 📁 Project Structure

```
airbnb_project/
│
├── controllers/        # Application logic
├── models/             # Database schemas
├── routes/             # Express routes
├── views/              # EJS templates
├── public/             # Static assets (CSS, JS, images)
├── utils/              # Helper utilities & middleware
│
├── app.js              # Main server file
├── schema.js           # DB schemas/config
├── cloudConfig.js      # Cloudinary configuration
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/shashwat1603/airbnb_project.git
cd airbnb_project
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
```

### 4️⃣ Run the application

```bash
node app.js
```

or (recommended)

```bash
npx nodemon app.js
```

Server will run at:

```
http://localhost:5000
```

---

# 🚀 Features

## 🏘 Listings
- Browse all property listings
- View detailed listing pages
- Upload listing images
- Edit and delete listings (host access)

## 🔎 Search & Filters
- Search listings by keywords
- Filter listings for easier discovery

## 📅 Booking System
- Users can book available listings
- Booking information stored in the database

## ⭐ Reviews & Ratings
- Users can leave reviews
- Ratings help other users evaluate listings

## 🔐 Authentication & Authorization
- Secure login and signup system
- Authentication using **Passport.js**
- Session management
- Access control for listing owners

## ☁️ Image Upload & Cloud Storage
- Image uploads handled with **Multer**
- Images stored using **Cloudinary**
- Optimized image hosting

## 🗄 Database
- MongoDB Atlas cloud database
- Data models managed with **Mongoose**

## 🎨 UI/UX Improvements
- Clean responsive layout
- Improved listing cards and pages
- User-friendly navigation

## ☁️ Deployment
- Application deployed on **Render**
- Environment variables configured securely
- Production-ready configuration

---

# 🤝 Contributing

Contributions are welcome!

Steps to contribute:

1. Fork the repository  
2. Create a new feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request 🚀

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Shashwat Roy**

GitHub:  
https://github.com/shashwat1603
