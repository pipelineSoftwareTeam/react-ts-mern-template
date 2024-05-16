<div id="header" align="center">
<h1>
MERN App Template 💻
</h1>
</div>

### Quickstart

```
$ npx react-ts-mern-template <your-app-name>
```

---

### Project Starter 🚀

MERN app template + Vite + TypeScript + Testing Library, with ESLint and Prettier configs, and a RESTful API with full CRUD functionality for a user database.

This template is designed for anyone wanting to build a full stack web application and immediately focus on writing the code, rather than spending time creating folders, files, configs and databases. All packages needed are included in the package.json files and can be installed with one command from the top level _(see further below)_.

---

### Info 🤓

<br>

Template includes:

> 1.  React with TS & Vite configuration
> 2.  ESLint and Prettier (airbnb)
> 3.  Concurrently npm package
> 4.  React Router
> 5.  Template frontend file structure
> 6.  Template CSS file structure with generic variables (not setup with a library in mind)
> 7.  Template server file structure with example Rest API for a user database
> 8.  JWT, bcrypt, CORS and auth middleware
> 9.  .env template file which includes the variables you need to fill in with your info
> 10. React testing library, vitest + MSW
> 11. Module aliases for client and server folders

Note: _you will need to create a MongoDB database collection, and input info into the .env file provided._

---

### Clone Repo 😎😎

<br>

Navigate to where you want to store the repo, then npm install all node modules

```
$ git clone https://github.com/pipelineSoftwareTeam/react-ts-mern-template.git

$ cd mern-app-template
$ npm run setup

```

---

### Spinning up project 🚗

<br>

Client (individually): <br>

```
$ npm run dev
```

Server (individually): <br>

```
$ npm run dev
```

_or using Concurrently..._ <br>

From top level of project:

```
$ npm run dev
```

From server folder:

```
$ npm run serve
```

---

### API endpoints

| Functionality        | Route                  | HTTP Method | Protected? |
| -------------------- | ---------------------- | ----------- | ---------- |
| Get users            | /api/auth              | GET         | Y          |
| Login user           | /api/auth/login        | POST        | N          |
| Register user        | /api/auth/register     | POST        | N          |
| Update user          | /api/auth/:id          | PUT         | Y          |
| Update user password | /api/auth/password/:id | PUT         | Y          |
| Delete user          | /api/auth/:id          | DELETE      | Y          |

Any protected routes require a JWT bearer token in the HTTP request header.

---

Romeo done! Happy coding 💪🏻

_Please send a PR for any suggestions for improvement to this template_ 😃

### Contributors 👇🏻

[![portfolio](https://img.shields.io/badge/oliver_jones-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ojones44) <br/>
[![portfolio](https://img.shields.io/badge/rikie_patrick-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/1sAndZeros) <br/>
