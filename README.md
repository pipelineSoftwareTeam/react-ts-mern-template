<div id="header" align="center">
<h1>
MERN App Template 💻
</h1>
</div>

---

### Project Starter 🚀

A basic MERN app template, with a RESTful API and full CRUD functionality for a user database.

---

### Info 🤓

<br>

Template includes:

> 1.  React with Vite configuration
> 2.  ESLint and Prettier (airbnb)
> 3.  React Router
> 4.  Template frontend file structure
> 5.  Template CSS file structure with generic variables (not setup with a library in mind)
> 6.  Template server file structure with example API for a user database
> 7.  JWT, bcrypt, CORS and auth middleware
> 8.  .env template file which includes the variables you need to fill in with your info

Project includes notes in the backend files to briefly explain what the code is doing

Note: _you will need to create a MongoDB database collection, and input info into the .env file provided. You will also need ESLint and Prettier installed as extensions in VSCode._

---

### Attributes 🙏🏻

<br>

Server code setup with the help of Traversy Media MERN stack series:

> https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLTMNWTDdd5z_CtvbzG6r1f4hjnCaphPTV

---

### Clone Repo 😎😎

<br>

Navigate to where you want to store the repo, then npm install all node modules

```
$ git clone https://github.com/ojones44/mern-app-template.git

$ cd mern-app-template
$ npm install

$ cd mern-app-template/client
$ npm install

$ cd mern-app-template/server
$ npm install
```

---

### Spinning up servers 🚗

<br>

Frontend: <br>

```
$ npm run dev
```

Backend: <br>

```
$ npm run server
```

Concurrently (from top level): <br>

```
$ npm run dev
```

---

### API endpoints

| Functionality     | Route               | HTTP Method | Protected? |
| ----------------- | ------------------- | ----------- | ---------- |
| Get users         | /api/users          | GET         | Y          |
| Get user by id    | /api/users/me       | GET         | Y          |
| Update user by id | /api/users/:id      | PUT         | Y          |
| Delete user by id | /api/users/:id      | DELETE      | Y          |
| Register user     | /api/users/register | POST        | N          |
| Login user        | /api/users/login    | POST        | N          |

Any protected routes require a JWT bearer token in the HTTP request header.

---

Romeo done! Happy coding 💪🏻

_Please send a PR for any suggestions for improvement to this template_ 😃
