# Todo List App (Back-End)

This is the back-end of the Todo List application built with Express.js, TypeScript, Prisma, and MySQL.

## Requirements
- Node.js >= 18.x
- npm >= 8.x
- MySQL Database

## Setup Instructions

1. Clone the Repository

Clone the repository to your local machine
`cd your-express-repo`

2. Install Dependencies

Run the following command to install the required dependencies:
`npm install`

3. Set Up the Database

### Create the Database
1. Install and run MySQL on your local machine or use a cloud database provider.
2. Create a new database for the application:
   CREATE DATABASE todoapp;

### Configure Prisma
1. Set up the database connection in the .env file:
   DATABASE_URL="mysql://username:password@localhost:3306/todoapp"
   Replace username and password with your MySQL credentials.

2. Run the Prisma migrations to set up the database schema:
   `npx prisma migrate dev --name init`

   This will create the necessary tables in the todoapp database based on the schema defined in prisma/schema.prisma.

4. Build and Run the Application

There are different commands to run the application based on your needs:

- Build TypeScript to JavaScript:
  `npm run build`
  This will compile the TypeScript files into JavaScript in the /dist directory.

- Build and Run the Application:
  `npm run build:run`
  This command will first build the TypeScript files and then run the compiled code from the /dist folder.

- Run the Development Server:
  `npm run dev`
  This will run the development server using ts-node (without compiling the code) for faster development.

5. Environment Variables

Make sure the .env file is properly configured with your database credentials:
DATABASE_URL="mysql://username:password@localhost:3306/todoapp"

6. Accessing the Application

- By default, the server will run on http://localhost:5000. You can use tools like Postman or Insomnia to test the API endpoints (e.g., GET /tasks, POST /tasks, etc.).

## File Structure
- src/index.ts: The main entry point for the Express app.
- prisma/schema.prisma: The Prisma schema for the Task model and database connection.

## Troubleshooting
- CORS Issues: If you encounter any issues related to CORS (Cross-Origin Resource Sharing), ensure that the back-end API has CORS enabled and is properly configured to allow requests from your front-end URL.
- Environment Variables: Ensure that the .env file is correctly configured with the correct DATABASE_URL.

## Contributing

Feel free to open issues or submit pull requests for improvements and bug fixes.

