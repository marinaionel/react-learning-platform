# Node.js Service with TypeScript - Courses API

This Node.js service provides API endpoints to manage courses. It is written in TypeScript.

## Prerequisites

Before running this service, ensure you have the following installed:

- Node.js
- npm
- TypeScript

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