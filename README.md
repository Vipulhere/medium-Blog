# React Blogging Application with Backend

This is a full-stack blogging application built using React for the frontend and a backend API built with Node.js, Express.js, and MongoDB. The application allows users to create an account, write and publish blog posts, and view their profile and published blogs.

## Features

The features of the application include:

### User Registration and Login
- Users can create an account by providing their name, email, and password.
- Existing users can log in using their email and password.
- User authentication is handled using JSON Web Tokens (JWT).
- User credentials are securely stored in a MongoDB database.

### User Profile
- Once logged in, users can view their profile page.
- The profile page displays the user's name, profile picture, email, and membership since date.
- Users can edit their name and delete their account.
- Profile pictures are uploaded and stored in the server's file system or a cloud storage service (such as AWS S3).

### Blog Creation and Publishing
- Users can write and publish blog posts.
- The blog creation form includes fields for the blog's title, subtitle, content, category, and an image.
- Users can upload an image to accompany their blog post.
- Blogs are stored in the MongoDB database and associated with the logged-in user.

### Blog Listing and Viewing
- Users can view a list of their published blog posts on a dedicated page.
- Each blog post is displayed with its title, subtitle, author name, and publication date.
- Clicking on a blog post takes the user to a detailed view of the blog with the full content.

### API Endpoints
- The backend provides various API endpoints to handle user authentication, profile management, and blog creation.
- Endpoints include user registration, user login, fetching user profile, updating user profile, deleting user account, uploading images, and creating/retrieving blog posts.

## Project Structure

The project structure consists of separate directories for the frontend and backend:

### Frontend (React)
- The frontend directory contains the React application code.
- It follows a component-based architecture, where components are organized into directories based on their functionality.
- Key directories include `components` (reusable UI components), `pages` (main application pages), `contexts` (React context for managing user data), and `services` (utility and API service functions).
- The frontend communicates with the backend API endpoints to perform authentication, retrieve user data, and create/retrieve blog posts.

### Backend (Node.js, Express.js, MongoDB)
- The backend directory contains the server-side code for the application.
- It follows a modular structure with separate directories for `models`, `controllers`, and `routes`.
- The `models` directory includes the database models for users and blog posts using Mongoose.
- The `controllers` directory contains the logic to handle user authentication, profile management, and blog post creation/retrieval.
- The `routes` directory defines the API endpoints and their corresponding controllers.
- User passwords are securely hashed and stored in the MongoDB database.

## Installation and Setup

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd react-blogging-app
   ```

3. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

4. Install backend dependencies:

   ```bash
   cd ../backend
   npm install
   ```

5. Start the backend server:

   ```bash
   npm start
   ``

`

6. Start the frontend development server:

   ```bash
   cd ../frontend
   npm start
   ```

7. The application will open in your default browser at `http://localhost:3000`.

8. Ensure that MongoDB is installed and running locally or provide the connection details for a remote MongoDB server in the backend configuration.

## Technologies Used

The main technologies and libraries used in this project are:

### Frontend
- React: A JavaScript library for building user interfaces.
- React Router: A library for handling navigation and routing in React applications.
- Axios: A promise-based HTTP client for making API requests.
- FileBase64: A React component for converting files to base64 format.

### Backend
- Node.js: A JavaScript runtime for executing server-side code.
- Express.js: A web application framework for Node.js.
- MongoDB: A NoSQL document database for storing user data and blog posts.
- Mongoose: A MongoDB object modeling library for Node.js.
- JSON Web Tokens (JWT): A standard for securely transmitting information between parties as a JSON object.

## Conclusion

The React Blogging Application with Backend provides a complete solution for building a full-stack blogging platform. It combines the frontend user interface built with React with a backend API built with Node.js, Express.js, and MongoDB to handle user authentication, profile management, and blog post creation/retrieval. The modular structure of the project allows for scalability and easy maintenance.
