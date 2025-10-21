# Restaurant Management Server

A Node.js Express server for managing restaurant food items and purchases.

## Features

- Food item management (CRUD operations)
- User purchase tracking
- User information storage
- MongoDB integration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file with:
```
DB_USER=your_mongodb_username
DB_PASSWORD=your_mongodb_password
PORT=5000
```

3. Start server:
```bash
node index.js
```

## API Endpoints

### Foods
- `GET /foods` - Get all foods
- `GET /foods/:id` - Get food by ID
- `GET /my-foods/:email` - Get foods by user email
- `POST /foods` - Add new food
- `PATCH /food/:id` - Update food
- `PATCH /foods/:id` - Update food (alternative)

### Purchases
- `GET /pruchasedfoods/:email` - Get user purchases
- `POST /purchasedfoods` - Add purchase
- `DELETE /purchasedfoods/:id` - Delete purchase

### Users
- `GET /user/:email` - Get user info
- `POST /userinfo` - Add user info

## Database

Uses MongoDB with collections:
- `Foods` - Food items
- `FoodPurchases` - Purchase records
- `UsersInfo` - User information