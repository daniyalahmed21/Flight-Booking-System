# Flight Booking System — Monorepo

A concise project overview for the Flight Booking System monorepo. This file contains project-scoped information only (service responsibilities, architecture, tech choices, and structure). Implementation and run instructions are kept in each service's `README.md`.

Services (top-level folders)

- `api-gateway/` — Gateway and public HTTP entrypoint (routing, authentication, gateway-level middleware).
- `flight-service/` — Flight domain: flights, airplanes, airports, cities, seats, and search.
- `booking-service/` — Booking domain: create/cancel bookings, seat allocation, and payment orchestration.
- `notification-service/` — Notification delivery (email/SMS) for booking events.

Architecture (high-level)

- Clients → `api-gateway` → service APIs (`flight-service`, `booking-service`, `notification-service`)
- Each service owns its domain data and runs independently. Databases are per-service (e.g., MySQL for `flight-service`, MongoDB may be used by `booking-service`).

Tech stack (high-level)

- Node.js + Express for HTTP services
- Sequelize ORM (MySQL) used in `flight-service`
- MongoDB (optional) for `booking-service`
- Winston (logging), dotenv for config management
- Docker & Docker Compose for environment orchestration (development)

Repository structure (top-level)

- `api-gateway/`
- `flight-service/`
- `booking-service/`
- `notification-service/`
- `docker-compose.yml` (optional orchestration)

Documentation and run instructions

Each service contains a focused `README.md` that documents how to run, configure, and develop that service. Refer to those files for implementation details, environment variables, migrations, and local development steps.

Contributing

- Fork the repository, create a feature branch, add tests and documentation, and open a pull request.
- Keep changes scoped to the service(s) affected where possible.

License

- ISC (see `LICENSE` file if present)


