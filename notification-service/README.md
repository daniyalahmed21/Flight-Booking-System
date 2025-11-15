# Notification Service

Description
-----------

Sends emails and notifications for booking events (confirmation, cancellations, reminders).

Quick start
-----------

1. Install dependencies:

```powershell
cd "C:\Users\Hp\Documents\Flights Microservices\notification-service"
npm install
```

2. Create `.env` (example):

```env
# Example
PORT=3003
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_pass
```

3. Start in development:

```powershell
npm run dev
```

Notes
-----
- Port used in `docker-compose.yml`: 3003
- Configure the SMTP provider details in the `.env` before sending emails.
