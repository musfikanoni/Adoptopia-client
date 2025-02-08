Adoptopia

## 1. Project Overview

This project is a **Pet Adoption Platform** that facilitates the adoption process by allowing users to browse available pets, submit adoption requests, and contribute to donation campaigns. The platform also includes an admin dashboard for managing users, pets, and donations.

## 2. Screenshot

!(https://i.ibb.co.com/4HNch6V/Screenshot-212.png)

## 3. Main Technologies Used

- **Frontend:** React, Tailwind CSS, TanStack Query
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase, JWT
- **UI Libraries:** ShadCN-UI, React-Select
- **Form Handling:** React-Hook-Form, Formik
- **Database:** MongoDB
- **Deployment:** Vercel (Client), Render (Server)
- **Payment Integration:** Stripe

## 4. Core Features

- **User Features:**
  - Browse and search pets by category
  - Submit adoption requests
  - Participate in donation campaigns
  - User authentication with Firebase and JWT
  - Secure profile management
- **Admin Features:**
  - Manage users and grant admin privileges
  - View and manage all pets and adoption requests
  - Oversee donation campaigns
- **Other Functionalities:**
  - Fully responsive design
  - Infinite scrolling for pet and donation listings

## 5. Dependencies Used

- **Frontend:**
  - React, React-Router-Dom, TanStack Query
  - Firebase, React-Select, React-Hook-Form
  - Flowbite, React-Quill (WYSIWYG Editor)
- **Backend:**
  - Express.js, MongoDB, Mongoose
  - Bcrypt, JSON Web Token (JWT)
  - Stripe for payment processing

## 6. How to Run the Project Locally

### Prerequisites:

- Node.js installed
- MongoDB database setup
- Firebase account for authentication

### Steps:

#### Clone the Repository:

```bash
  git clone [client_repo_link]
  git clone [server_repo_link]
```

#### Install Dependencies:

```bash
  cd client && npm install
  cd ../server && npm install
```

#### Set Up Environment Variables:

Create a `.env` file in the `server` folder and add:

```env
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET=your_stripe_secret_key
```

Create a `.env` file in the `client` folder and add:

```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
```

#### Start the Server and Client:

```bash
  cd server && npm start
  cd client && npm start
```

## 7. Live Project Links & Resources

- **Live Site:** https://ph-assignment-12.netlify.app/
- **Client Repository:** https://github.com/musfikanoni/Adoptopia-client
- **Server Repository:** https://github.com/musfikanoni/Adoptopia-server

---

### Notes:

- Ensure the Firebase and MongoDB credentials are secured using environment variables.
- Follow best coding practices, including meaningful commit messages.
- Make sure the deployment is error-free and properly configured.


