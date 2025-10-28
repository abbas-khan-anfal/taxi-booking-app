## 🚖 Taxi Booking Website

A full-featured **Taxi Booking Web Application** built with **Next.js (App Router)**, **MongoDB**, and **Cloudinary**, providing seamless booking, authentication, and car management for users, drivers, and admins.

---

### 🧠 Tech Stack

| Category       | Technology                                       |
| -------------- | ------------------------------------------------ |
| Frontend       | **Next.js 14 (App Router)**, React, Tailwind CSS |
| Backend        | **Node.js**, **Mongoose**        |
| Database       | **MongoDB (Mongoose ORM)**                       |
| Cloud Storage  | **Cloudinary** for image uploads                 |
| Authentication | **JWT (JSON Web Token)**                         |
| Deployment     | **Vercel**                                       |
| Image Handling | Next.js **Image Optimization**                   |

---

### ✨ Features

#### 👥 User

* Register / Login with authentication
* View available cars
* Book a taxi with pickup & drop-off details
* View booking status

#### 🚗 Driver / Admin

* Secure **admin dashboard**
* Add / update / delete cars
* Manage bookings
* Upload car images (via **Cloudinary**)
* Manage driver details

#### 🌐 System

* Optimized images using Next.js `<Image />`
* Secure API routes
* Protected pages for users & admins
* Environment-based configuration for local and production

---

---

### ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following variables:

```bash
# MongoDB Configuration
MONGO_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

### 🧑‍💻 Installation & Setup

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/taxi-booking.git
cd taxi-booking
```

#### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

#### 3️⃣ Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Your app will run at **[http://localhost:3000](http://localhost:3000)**

---

### 🚀 Deployment (Vercel)

When ready to deploy:

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Import your repository
4. Add environment variables in **Vercel → Project Settings → Environment Variables**
5. Deploy 🚀

---

### 🔐 Authentication Flow

* User registers → Password hashed using **bcrypt**
* On login → JWT token generated
* Token stored in HTTP-only cookies
* Protected routes verified using middleware

---

### 📸 Image Upload Flow

1. User/Admin uploads image
2. Image uploaded to **Cloudinary** via API
3. Secure Cloudinary URL stored in MongoDB
4. Displayed using Next.js optimized `<Image />`

---

### 🧑‍💼 Author

**Abbas Khan**
MERN Stack Developer | Full Stack Web Developer
📧 [ak9950025@gmail.com]
