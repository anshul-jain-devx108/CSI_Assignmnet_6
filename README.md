# RESTful API with Node.js and Express

This is a simple RESTful API built using **Node.js** and **Express.js** that performs basic **CRUD operations** on a `users` resource using a JSON file (`data.json`) as a simple datastore.

## 📁 Project Structure

```
restful-api/
├── data.json       # In-memory JSON database
├── server.js       # Main Express server
└── README.md       # Project instructions
```

## 🚀 How to Run

### 1. Clone or Download the Project

Unzip the folder or clone if it's hosted on a repository.

### 2. Install Dependencies

Make sure Node.js is installed on your machine.

```bash
npm install express
```

### 3. Start the Server

```bash
node server.js
```

The server will start at: [http://localhost:3000](http://localhost:3000)

## 📌 API Endpoints

| Method | Endpoint     | Description          |
| ------ | ------------ | -------------------- |
| GET    | `/users`     | Get all users        |
| GET    | `/users/:id` | Get user by ID       |
| POST   | `/users`     | Add a new user       |
| PUT    | `/users/:id` | Update existing user |
| DELETE | `/users/:id` | Delete a user        |

## 📄 Sample `data.json`

```json
[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com"
  },
  {
    "id": 2,
    "name": "Bob",
    "email": "bob@example.com"
  }
]
```

## ✅ Notes

* This project is for educational/demo purposes.
* For production, consider using a real database (MongoDB, PostgreSQL, etc).

---

Happy coding! 🚀
