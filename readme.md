# Initialize a new project and create a package.json file
npm init -y

# Install dedent 
npm install dedent express jest node-pg-migrate nodemon pg pg-format supertest

# Create migrate add users table
npm run migrate create add users table

# Windows with Git Bash
DATABASE_URL=postgres://postgres:password@localhost:5432/socialnetwork npm run migrate up

![Node API](image/image.png)