# Flight Service

Description
-----------

Manages flights, airplanes, airports, cities, seats and flight search.

Quick start
-----------

1. Install dependencies:

```powershell
cd "C:\Users\Hp\Documents\Flights Microservices\flight-service"
npm install
```

2. Create `.env` in this folder with required variables (example):

```env
# Example
PORT=3001
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=flight_booking
```

3. Run migrations and seed (if using Sequelize):

```powershell
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

4. Start in development:

```powershell
npm run dev
```

Notes
-----
- Port used in `docker-compose.yml`: 3001
- Add a `Dockerfile` if you want the compose build to succeed out-of-the-box.
