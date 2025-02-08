# Blog Application

## Overview
This is a full-stack blog application that allows users to register, log in, create, edit, and delete blog posts. The application features a **React frontend** and an **Express.js backend**, utilizing **MongoDB** for data storage. User authentication is managed via **JWT (JSON Web Token)**, and uploaded images are stored in an `uploads/` directory.

## Features
- User authentication (Register/Login/Logout)
- Create, edit, and delete blog posts
- Image upload functionality for blog posts
- Secure authentication using JWT
- Responsive design for different screen sizes

## Tech Stack
### Frontend
- React.js
- React Router
- React Quill (for rich-text editing)
- CSS (for styling)

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT) for authentication
- Multer for image uploads
- bcrypt.js for password hashing

---
## Installation & Setup

### 1. Clone the repository
```sh
git clone https://github.com/mahema1/blog-application.git
cd blog-application
```

### 2. Install dependencies
#### Backend
Navigate to the `api/` directory and install dependencies:
```sh
cd api
npm install
```

#### Frontend
Navigate to the `client/` directory and install dependencies:
```sh
cd ../client
npm install
```

### 3. Set up MongoDB
Make sure you have **MongoDB** installed and running locally, or use **MongoDB Atlas**.

Update the `mongoose.connect()` URI inside `index.js` with your MongoDB connection string:
```js
mongoose.connect('your-mongodb-connection-string');
```

### 4. Start the development servers
#### Backend
```sh
cd api
node index.js
```
(Default backend runs on **http://localhost:4000**)

#### Frontend
```sh
cd ../client
yarn start
```
(Default frontend runs on **http://localhost:3000**)

---
## API Endpoints
### **Authentication**
- **POST** `/register` → Register a new user
- **POST** `/login` → Login and receive a JWT token
- **GET** `/profile` → Fetch the currently logged-in user
- **POST** `/logout` → Logout user by clearing JWT cookie

### **Blog Posts**
- **POST** `/post` → Create a new post (with file upload)
- **GET** `/post` → Fetch all posts
- **GET** `/post/:id` → Fetch a single post by ID
- **PUT** `/post/:id` → Update a post (only the author can update)

---
## Project Structure
```
/blog-application
├── api/            # Backend code (Node.js + Express)
│   ├── models/     # Mongoose models for User & Post
│   ├── uploads/    # Folder for storing uploaded images
│   ├── index.js    # Main Express server file
│   ├── package.json
│   └── ...
├── client/         # Frontend code (React.js)
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Pages like Home, Login, Register, EditPost
│   │   ├── App.js       # Main entry point for React app
│   │   ├── App.css      # Global styles
│   ├── package.json
│   └── ...
└── README.md       # Documentation
```

---
## Future Improvements
- Implement user profile pages
- Add categories & tags for posts
- Improve UI/UX with a modern design framework
- Deploy the application to **Heroku/Vercel** (frontend) and **Render** (backend)

---
## License
This project is open-source and available under the **MIT License**.

---
## Author
Developed by **Mahema Reddy Nelaturi**

Feel free to contribute, report issues, or suggest improvements!

🔗 **GitHub Repository:** [your-repo-link-here]

