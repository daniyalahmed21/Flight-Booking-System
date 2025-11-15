# Booking Service

Description
-----------

Handles bookings, seat allocation, booking lifecycle and payment orchestration.

Quick start
-----------

1. Install dependencies:

```powershell
cd "C:\Users\Hp\Documents\Flights Microservices\booking-service"
npm install
```

2. Create `.env` (example):

```env
# Example
PORT=3002
DB_URI=mongodb://localhost:27017/booking_db
```

3. Start in development:

```powershell
npm run dev
```

Notes
-----
- Port used in `docker-compose.yml`: 3002
- If this service uses MongoDB, ensure Mongo is running or configure a service in `docker-compose.yml`.
