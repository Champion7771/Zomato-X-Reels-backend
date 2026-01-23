Zomato X Reels – Backend

A scalable backend system that combines **food ordering features (like Zomato)** with **short-video / reels functionality**, built using **Node.js, Express, and MongoDB**.

---

##  Features

###  Authentication & Authorization

* User signup & login using **JWT**
* Passwords securely hashed using **bcrypt**
* Role-based access control (User / Admin)

###  Restaurant & Food Management

* Create and manage restaurants
* Add, update, and delete food items
* Categorized menus
* Pagination and filtering for large datasets

###  Reels / Short Videos

* Upload and manage food-related reels
* Like, comment, and view reels
* Feed-based reel fetching (similar to Instagram Reels)
* Optimized queries for fast loading

###  Orders & User Interaction

* Place food orders
* Track order history
* User activity tracking
* Aggregated stats using MongoDB aggregation pipelines

---

##  Tech Stack

| Layer       | Technology         |
| ----------- | ------------------ |
| Runtime     | Node.js            |
| Framework   | Express.js         |
| Database    | MongoDB            |
| ODM         | Mongoose           |
| Auth        | JWT + bcrypt       |
| Validation  | Express middleware |
| Environment | dotenv             |

---

##  Project Structure

```
Zomato-X-Reels-backend/
│
├── src/
│   ├── controllers/     # Business logic
│   ├── routes/          # API routes
│   ├── models/          # Mongoose schemas
│   ├── middlewares/     # Auth, validation, error handling
│   ├── utils/           # Helper functions
│   └── config/          # DB & environment config
│
├── server.js            # Entry point
├── package.json
└── README.md
```


##  API Overview (High Level)

### Auth

* `POST /auth/register`
* `POST /auth/login`

### Users

* `GET /users/profile`
* `PUT /users/profile`

### Restaurants

* `POST /restaurants`
* `GET /restaurants`
* `GET /restaurants/:id`

### Food Items

* `POST /foods`
* `GET /foods`
* `GET /foods/:id`

### Reels

* `POST /reels`
* `GET /reels`
* `POST /reels/:id/like`

### Orders

* `POST /orders`
* `GET /orders/history`

---

##  Important Backend Concepts Used

* **JWT-based stateless authentication**
* **MongoDB aggregation pipelines** for analytics
* **Pagination & filtering** for performance
* **Middleware-driven architecture**
* **Separation of concerns**
* **Error handling & validation**



##  Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Champion7771/Zomato-X-Reels-backend.git
cd Zomato-X-Reels-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Server

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

##  Testing

You can test APIs using:




It demonstrates:

* Real-world backend patterns
* Performance-aware data modeling
* Auth, authorization, and scalability
* Practical use of MongoDB beyond `.find()`


##  Future Improvements

* Redis caching for reels feed
* Cloud storage for video uploads
* Recommendation algorithm
* Microservices split (auth, orders, reels)
* WebSockets for real-time updates
