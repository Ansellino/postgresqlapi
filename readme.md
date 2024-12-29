# Initialize a new project and create a package.json file
```bash
npm init -y
```
# Install dedent 
```bash
npm install dedent express jest node-pg-migrate nodemon pg pg-format supertest
```
# Create migrate add users table
```bash
npm run migrate create add users table
```
# Windows with Git Bash
```bash
DATABASE_URL=postgres://postgres:password@localhost:5432/socialnetwork npm run migrate up
```

# Run the server
```bash
npm run start
```

# Node API Method and Goal
![alt text](image/image.png)

# Postman testing
```bash
http://localhost:3005/users
```

# REST CLIENT testing 
make file name request.http
```bash
http://localhost:3005/users
```