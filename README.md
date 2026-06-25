# BlogSphere - Full Stack Blogging Platform

## Project Overview

BlogSphere is a full-stack blogging platform where users can register, log in, create blog posts, read blogs, and interact through comments.

## Features

* User Registration
* User Login Authentication
* JWT Authentication
* Create Blog Posts
* View All Blogs
* View Single Blog Details
* Comment System
* Responsive User Interface
* MongoDB Database Integration
* RESTful APIs

## Technology Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs

## Project Structure

Frontend:

* Home Page
* Login Page
* Register Page
* Create Blog Page
* Blog Details Page
* Comment Section

Backend:

* Authentication APIs
* Blog APIs
* Comment APIs
* MongoDB Database

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
npm install
npm run dev
```

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Blogs

GET /api/posts

GET /api/posts/:id

POST /api/posts

PUT /api/posts/:id

DELETE /api/posts/:id

### Comments

GET /api/comments/:postId

POST /api/comments

## Future Enhancements

* User Profiles
* Blog Categories
* Blog Search
* Like System
* Rich Text Editor
* Image Uploads

## Author

Bhanu
