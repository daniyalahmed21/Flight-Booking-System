# Flight Booking System - Microservices Architecture

A robust, scalable microservices-based architecture for a flight booking system. This system consists of multiple services working together to provide a complete flight booking solution.

## 🏗️ System Architecture

The system is composed of the following microservices:

1. **API Gateway**
   - Single entry point for all client requests
   - Request routing and load balancing
   - Authentication and authorization
   - Request/Response transformation

2. **Flight Service** (this repository)
   - Flight scheduling and management
   - Airplane and seat configuration
   - Airport and city management
   - Flight availability and search

3. **Booking Service**
   - Booking management
   - Seat selection and allocation
   - Booking status tracking
   - Payment processing integration

## 🚀 Features

### Flight Service
- **Flight Management**: Create, read, update, and delete flight information
- **Airplane Management**: Manage airplane details and configurations
- **Airport Management**: Handle airport information and locations
- **City Management**: Manage city data and associations
- **Search & Availability**: Search for flights and check seat availability

### API Gateway
- **Request Routing**: Route requests to appropriate microservices
- **Authentication**: Centralized authentication and authorization
- **Rate Limiting**: Protect services from abuse
- **Request/Response Transformation**: Transform requests and responses as needed

### Booking Service
- **Booking Management**: Create, view, update, and cancel bookings
- **Seat Selection**: Manage seat selection and allocation
- **Booking Status**: Track booking status and history
- **Payment Integration**: Handle payment processing

### Shared Features
- **Error Handling**: Comprehensive error handling and logging
- **API Versioning**: Versioned API endpoints
- **Logging**: Winston logger implementation for application logging

## 🛠️ Tech Stack

### Common Across Services
- **Runtime**: Node.js
- **Framework**: Express.js
- **Logging**: Winston
- **Environment Management**: dotenv
- **Containerization**: Docker
- **API Documentation**: Swagger/OpenAPI

### Flight Service
- **Database**: MySQL
- **ORM**: Sequelize

### API Gateway
- **API Gateway**: Express Gateway
- **Authentication**: JWT
- **Load Balancer**: Nginx (optional)

### Booking Service
- **Database**: MongoDB (for flexible schema)
- **ODM**: Mongoose

## 📦 Prerequisites

### Common
- Node.js (v16 or later)
- npm (v8 or later) or yarn
- Docker & Docker Compose (for containerized deployment)

### Flight Service
- MySQL (v8.0 or later)

### Booking Service
- MongoDB (v5.0 or later)

### API Gateway
- No additional prerequisites beyond Node.js

## 🚀 Getting Started

### Prerequisites Setup
1. **Clone all repositories**
   ```bash
   # Clone Flight Service (this repository)
   git clone <flight-service-repo-url>
   
   # Clone API Gateway
   git clone <api-gateway-repo-url>
   
   # Clone Booking Service
   git clone <booking-service-repo-url>
   ```

2. **Set up Docker (recommended)**
   ```bash
   # Start all services with Docker Compose
   docker-compose up -d
   ```
   
   Alternatively, you can set up each service individually as described below.

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   NODE_ENV=development
   PORT=3000
   DB_NAME=flight_booking
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=localhost
   DB_PORT=3306
   ```

4. **Database setup**
   - Create a new MySQL database
   - Update the database configuration in `src/config/config.json`
   - Run migrations (if any):
     ```bash
     npx sequelize-cli db:migrate
     ```
   - Seed initial data (if needed):
     ```bash
     npx sequelize-cli db:seed:all
     ```

5. **Start the development server**
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:3000`

## 🚦 API Endpoints

### Flights
- `GET /api/v1/flights` - Get all flights
- `POST /api/v1/flights` - Create a new flight
- `GET /api/v1/flights/:id` - Get flight by ID
- `PATCH /api/v1/flights/:id` - Update flight details
- `DELETE /api/v1/flights/:id` - Delete a flight

### Airplanes
- `GET /api/v1/airplanes` - Get all airplanes
- `POST /api/v1/airplanes` - Add a new airplane
- `GET /api/v1/airplanes/:id` - Get airplane by ID
- `PATCH /api/v1/airplanes/:id` - Update airplane details
- `DELETE /api/v1/airplanes/:id` - Remove an airplane

### Airports
- `GET /api/v1/airports` - Get all airports
- `POST /api/v1/airports` - Add a new airport
- `GET /api/v1/airports/:id` - Get airport by ID
- `PATCH /api/v1/airports/:id` - Update airport details
- `DELETE /api/v1/airports/:id` - Remove an airport

### Cities
- `GET /api/v1/cities` - Get all cities
- `POST /api/v1/cities` - Add a new city
- `GET /api/v1/cities/:id` - Get city by ID
- `PATCH /api/v1/cities/:id` - Update city details
- `DELETE /api/v1/cities/:id` - Remove a city

## 🏗️ Project Structure

```
src/
├── config/           # Configuration files
├── controllers/      # Route controllers
├── middlewares/      # Custom middlewares
├── models/           # Database models
├── repositories/     # Database queries
├── routes/           # API routes
├── services/         # Business logic
└── utils/            # Utility functions
```

## 📝 Development

### Running in development mode
```bash
npm run dev
```

### Running tests
```bash
# Coming soon
# npm test
```

### Linting
```bash
# Coming soon
# npm run lint
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Node.js
- Express
- Sequelize
- MySQL
- And all the amazing open-source libraries used in this project
