# NestJS Todo Clean Architecture

This project is a simple application built using NestJS and follows the principles of Clean Architecture. The goal is to create a maintainable, testable, and scalable application.

## What is Clean Architecture?

Clean Architecture is a software design philosophy that emphasizes the separation of concerns and the independence of the business logic from external factors such as databases, frameworks, and user interfaces. The main idea is to create a system that is easy to maintain, test, and extend over time.

![Clean Architecture Diagram](https://miro.medium.com/v2/resize:fit:720/format:webp/1*gNMlCdPkghf_2F8v3MGtqA.png)

### Key Principles of Clean Architecture

- **Independence**: The business logic should be independent of frameworks, databases, and user interfaces.
- **Testability**: The system should be easy to test, with business rules that can be tested independently of external factors.
- **Maintainability**: The system should be easy to maintain and understand, with clear separation of concerns.
- **Scalability**: The architecture should support the growth and evolution of the system over time.

### Layers of Clean Architecture

The project is divided into several layers:

- **Domain**: Contains the business logic and entities.
- **Application**: Contains use cases and service interfaces.
- **Infrastructure**: Contains implementations of the service interfaces, database models, and external services.
- **Presentation**: Contains the controllers and API routes.

![Clean Architecture Diagram](https://miro.medium.com/max/1400/1*ZdlHz8B0-qu9Y-QO3AXR_w.png)

## Project Structure

The project is divided into several layers:

- **Domain**: Contains the business logic and entities.
- **Application**: Contains use cases and service interfaces.
- **Infrastructure**: Contains implementations of the service interfaces, database models, and external services.
- **Presentation**: Contains the controllers and API routes.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- PostgreSQL (or any other preferred database)

### Installation

1. **Clone the repository:**

  ```bash
  git clone https://github.com/hieulechanhkk/nestjs-clean-architecture.git
  
  cd nestjs-clean-architecture
  ```

2. **Install dependencies:**

  ```bash
  npm install
  ```

3. **Set up environment variables:**

  Create a `.env` file in the root directory and add the following variables:

  ```env
  DATABASE_HOST=localhost
  DATABASE_PORT=5432
  DATABASE_USER=your_db_user
  DATABASE_PASSWORD=your_db_password
  DATABASE_NAME=your_db_name
  ```

4. **Run database migrations:**

  ```bash
  npm run typeorm migration:run
  ```

5. **Start the application:**

  ```bash
  npm run start:dev
  ```

### Running Tests

To run the tests, use the following command:

```bash
npm run test
```

### API Documentation

The API documentation is available at `http://localhost:3000/api` when the application is running.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. NestJS Clean Architecture

This project is a simple application built using NestJS and follows the principles of Clean Architecture. The goal is to create a maintainable, testable, and scalable application.

## Project Structure

The project is divided into several layers:

- **Domain**: Contains the business logic and entities.
- **Application**: Contains use cases and service interfaces.
- **Infrastructure**: Contains implementations of the service interfaces, database models, and external services.
- **Presentation**: Contains the controllers and API routes.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- PostgreSQL (or any other preferred database)

### Installation

1. **Clone the repository:**

  ```bash
  git clone https://github.com/hieulechanhkk/nestjs-clean-architecture.git

  cd nestjs-clean-architecture
  ```

2. **Install dependencies:**

  ```bash
  npm install
  ```

3. **Set up environment variables:**

  Create a `.env` file in the root directory and add the following variables:

  ```env
  DATABASE_HOST=localhost
  DATABASE_PORT=5432
  DATABASE_USER=your_db_user
  DATABASE_PASSWORD=your_db_password
  DATABASE_NAME=your_db_name
  ```

4. **Run database migrations:**

  ```bash
  npm run typeorm migration:run
  ```

5. **Start the application:**

  ```bash
  npm run start:dev
  ```

### Running Tests

To run the tests, use the following command:

```bash
npm run test
```

### API Documentation

The API documentation is available at `http://localhost:3000/api` when the application is running.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.