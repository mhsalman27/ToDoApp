# ToDoApp

A Node.js/Express REST API backend built on MongoDB (via Mongoose), currently implementing user registration and login. This is the foundation of a MERN-stack To-Do application.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** [Express](https://expressjs.com/) 5
- **Database:** MongoDB with [Mongoose](https://mongoosejs.com/) ODM
- **Other libraries:**
  - `dotenv` – loads environment variables from `.env`
  - `cors` – enables cross-origin requests (for a future frontend)
  - `morgan` – HTTP request logging (`dev` format)
  - `nodemon` – auto-restarts the server during development
  - `dns` – forces DNS resolution to public resolvers (8.8.8.8 / 8.8.4.4) to work around local resolvers/VPNs that break `mongodb+srv://` SRV lookups

## Project Structure

```
ToDoApp/
├── server.js              # App entry point: middleware, routes, DB connect, server start
├── config/
│   └── db.js              # Mongoose connection setup
├── models/
│   └── userModel.js       # User schema (userName, email, password, timestamps)
├── controllers/
│   ├── userController.js  # register/login business logic
│   └── testController.js  # simple health-check/test endpoints
├── routes/
│   ├── userRoute.js        # /app/v1/user routes
│   └── testRoute.js        # /app/v1/test routes
├── postman/                # Postman collection/environment/specs for API testing
└── package.json
```

## Getting Started

### Prerequisites

- Node.js installed
- A MongoDB instance (local, or a MongoDB Atlas cluster)

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root with the following keys:

```
PORT = 8080
DEV_MODE = development
MONGO_URL_LOCAL = mongodb://localhost:27017
MONGO_URL = <your MongoDB connection string>
```

- `PORT` – port the server listens on (defaults to `8080` if not set)
- `DEV_MODE` – environment label logged on startup
- `MONGO_URL` – the Mongoose connection string used by `config/db.js`

> The `.env` file is git-ignored and should never be committed, since it holds database credentials.

### Running the Server

```bash
npm run server
```

This starts the server with `nodemon`, which watches for file changes and auto-restarts. On success you should see:

```
Node Server Running on <DEV_MODE> mode on Port on <PORT>
ConnectDb SuccessFully :
```

## API Endpoints

All routes are mounted under the `/app/v1` prefix.

### User Routes (`/app/v1/user`)

| Method | Endpoint    | Description                          |
|--------|-------------|---------------------------------------|
| POST   | `/register` | Register a new user                   |
| POST   | `/login`    | Log in an existing user               |

**Register — `POST /app/v1/user/register`**

Request body:
```json
{
  "userName": "john",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

Responses:
- `201` – user created successfully
- `400` – missing one or more required fields
- `409` – email already registered
- `500` – server/database error

**Login — `POST /app/v1/user/login`**

Request body:
```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

Responses:
- `200` – login successful, returns the user document
- `400` – invalid email or password
- `404` – server error

### Test Routes (`/app/v1/test`)

| Method | Endpoint | Description               |
|--------|----------|----------------------------|
| GET    | `/test`  | Basic "Node Start" health check |
| GET    | `/home`  | Basic sample response       |

## Data Model

**User** (`models/userModel.js`)

| Field      | Type   | Required | Notes            |
|------------|--------|----------|-------------------|
| userName   | String | Yes      |                    |
| email      | String | Yes      | Unique             |
| password   | String | Yes      |                    |
| createdAt  | Date   | auto     | via `timestamps`   |
| updatedAt  | Date   | auto     | via `timestamps`   |

## API Testing

A Postman workspace (collections, environments, specs) is included under [postman/](postman/) for manually exercising the endpoints above.

## Known Limitations / Roadmap

This project is under active development. Notable gaps to be addressed:

- [ ] Passwords are currently stored and compared in plain text — password hashing (e.g. bcrypt) should be added before any real use
- [ ] No authentication tokens (e.g. JWT) or protected routes yet
- [ ] No To-Do (task) CRUD endpoints yet — only user registration/login exist so far
- [ ] No input validation library (e.g. Joi/express-validator) beyond basic empty-field checks

## License

ISC
