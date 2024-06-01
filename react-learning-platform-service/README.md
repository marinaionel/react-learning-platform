# Node.js Service with TypeScript - Courses API

This Node.js service provides API endpoints to manage courses. It is written in TypeScript.

## Prerequisites

Before running this service, ensure you have the following installed:

- Node.js
- npm
- TypeScript
- Docker

## Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using npm:

```bash
npm install
```

## Usage

To start the server, run:

```bash
npm run start
```

This will start the server at `http://localhost:3001`.

## Endpoints

### GET /api/courses

Retrieves all courses for a user.

- **Query Parameters**:

  - `userId`: The ID of the user for whom to fetch courses.

- **Response**:
  - Returns an array of courses associated with the specified user.

### GET /api/courses/:id

Retrieves details of a specific course by its ID.

- **Path Parameters**:

  - `id`: The ID of the course to retrieve.

- **Response**:
  - Returns the course details if found, otherwise returns an error.

## Docker

You can use Docker to containerize and run this Node.js service. Below are the instructions to build and run the Docker container.

### Build the Docker Image

First, build the Docker image using the following command:

```bash
docker build -t react-learning-platform-service .
```

### Run the Docker Container

Once the image is built, you can run the Docker container with:

```bash
docker run -d -p 3001:3001 --name react-learning-platform-container react-learning-platform-service
```

This command runs the container in detached mode (`-d`), maps port 3001 of the host to port 3001 of the container (`-p 3001:3001`), and names the container `react-learning-platform-container`.

After running this command, the server will be accessible at `http://localhost:3001`.

### Stopping the Container

To stop the running container, use the following command:

```bash
docker stop react-learning-platform-container
```

### Removing the Container

If you want to remove the stopped container, run:

```bash
docker rm react-learning-platform-container
```

### Checking Logs

To check the logs of the running container, use:

```bash
docker logs react-learning-platform-container
```

By using Docker, you can ensure a consistent environment for running your Node.js service.
