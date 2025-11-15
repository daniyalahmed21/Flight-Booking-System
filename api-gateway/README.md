# API Gateway

Description
-----------

Single entry point for clients. Handles routing, authentication, and gateway-level concerns.

Quick start
-----------

1. Install dependencies:

```powershell
cd "C:\Users\Hp\Documents\Flights Microservices\api-gateway"
npm install
```

2. Create `.env` (example):

```env
# Example
PORT=3000
JWT_SECRET=your_jwt_secret
```

3. Start in development:

```powershell
npm run dev
```

Notes
-----
- Port used in `docker-compose.yml`: 3000
- Ensure the gateway routes and environment match the underlying services' ports.
