🎟️ Event Booking System
A RESTful API built with Express.js and PostgreSQL to manage event bookings. It supports user registration, event creation, ticket reservations, and more — perfect for organizing, managing, and booking events efficiently.

📦 Features
🔐 User registration & login (JWT authentication)

📅 Create, read, update, delete (CRUD) events

🎫 Reserve or cancel tickets

👥 Admin & user role support

📊 View event capacity and booked spots

🛠️ Tech Stack
Backend Framework: Express.js

Database: PostgreSQL

Authentication: JWT

Environment Config: dotenv

📁 Project Structure
bash
Copy
Edit
Event_Booking_System/
├── config/          # DB and env config
├── controllers/     # Business logic
├── models/          # SQL queries
├── routes/          # API routes
├── middleware/      # Auth middleware
├── .env             # Environment variables
├── app.js           # Express entry point
└── server.js        # Server start
⚙️ Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/OhanyanDavit/Event_Booking_System.git
cd Event_Booking_System
Install dependencies

bash
Copy
Edit
npm install
Set up environment variables

Create a .env file and add your database connection:

ini
Copy
Edit
PORT=5000
DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=event_booking
DB_PASSWORD=your_db_password
DB_PORT=5432
JWT_SECRET=your_secret_key
Run the server

bash
Copy
Edit
npm start
📬 API Endpoints (Examples)
Auth
POST /auth/register – Register a user

POST /auth/login – Login and get token

Events
POST /events – Create event (admin only)

GET /events – List all events

GET /events/:id – Get event by ID

PUT /events/:id – Update event

DELETE /events/:id – Delete event

Bookings
POST /events/:id/book – Book a ticket

DELETE /events/:id/cancel – Cancel booking

🔐 Auth Flow
Users receive a JWT after login.

Protect routes using authMiddleware.

Role-based access for certain endpoints.

🧪 Testing (Optional)
Use Postman or similar tool to test endpoints. A sample Postman collection can be added here.

📌 Future Improvements
Payment gateway integration

Email notifications

Event categories & filtering

Admin dashboard

🧑‍💻 Author
Davit Ohanyan
GitHub

