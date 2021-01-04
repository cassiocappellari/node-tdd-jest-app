<h1 align="center">Node.js application developed with TDD principles</h1>

<h3 align="center"> 
	Status: finished :heavy_check_mark:
</h3>

<p align="center">
<a href="https://github.com/cassiocappellari/node-tdd-jest-app/commits/main">
	<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/cassiocappellari/node-tdd-jest-app?color=black">
</a>
    
<img alt="License" src="https://img.shields.io/badge/license-MIT-black">

<a href="https://github.com/cassiocappellari/node-tdd-jest-app/stargazers">
	<img alt="Stargazers" src="https://img.shields.io/github/stars/cassiocappellari/node-tdd-jest-app?style=social">
</a>
</p>

<a href="https://insomnia.rest/run/?label=node-tdd-jest-app&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fcassiocappellari%2Fnode-tdd-jest-app%2Fmaster%2FInsomnia_2021-01-03" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

## 📋 Index

- [About](#-about)
- [Routes](#-routes)
- [.env](#-.env)
- [Technologies](#-technologies)
- [How To Use](#-how-to-use)
- [Tests](#-running-tests)
- [Author](#-author)
- [License](#-license)

## 🚀 About

This application was built from scratch using **JavaScript**, **Node.js**, **Express**, **PostgreSQL**, **SQLite**, **Jest** and **Sequelize** using TDD principles. Besides the **unit and integration tests**, there are routes to register and authenticate a user and also a route that only a validated user has permission to access.

## 🗺️ Routes

|route|HTTP Method|params|description
|:---|:---:|:---:|:---:
|`/user`|POST|Request body with `name`, `email` and `password`|Register a user
|`/sessions`|POST|Request body with `email` and `password`|Authenticate user returning a JWT token
|`/dashboard`|GET|Request header with `Bearer` + `JWT token`|Sends a return message if the user is successfully authenticated using the token provided in the `/sessions` route

**Request Body**

- POST: `/user`
```json
{
	"name": "Exemple",
	"email": "exemple@gmail.com",
	"password": "123456789"
}
```

- POST: `/sessions`
```json
{
	"email": "exemple@gmail.com",
	"password": "123456789"
}
```

**Request Header**

- GET: `/dashboard`
```
{
	Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjA5NzExMzUyfQ.4zk2v94Iz5X8-yjK5bQyB9mCF7YZvqS7-8RZ27_Yu94
}
```

## 🔑 .env

There are two files to configure the application environment.

**tests.env**

|key|description|default
|:---|:---:|:---:
|DB_DIALECT|Database used in the test environment|sqlite

**development.env**

|key|description|default
|:---|:---:|:---:
|DB_HOST|Localhost URL|127.0.0.1
|DB_USERNAME|Username to authenticate in your local database| -
|DB_PASSWORD|Password to authenticate in your local database| -
|DB_DBNAME|Database name set on your local machine| -

## 🤖 Technologies

The project was developed using this technologies:

- [PostgreSQL](https://www.postgresql.org/)
- [SQLite3](https://www.sqlite.org/version3.html)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)

## ⚙ How to Use

```bash
# Clone this repository

$ git clone https://github.com/cassiocappellari/node-tdd-jest-app.git

# Enter the project folder

$ cd node-tdd-jest-app

# Install the dependencies

$ npm install

# Start the project

$ node src/index.js

```

## 🔬 Running Tests

```
$ npm test
```

## Coverage Reports

The coverage reports are automatically created after the tests run and you can see it inside `tests/coverage`.

## 👨‍🚀 Author

**Cássio Cappellari**

- GitHub: [@cassiocappellari](https://github.com/cassiocappellari)
- LinkedIn: [@cassiocappellari](https://www.linkedin.com/in/cassiocappellari/)

## 📝 License

This project is under the [MIT](./LICENSE) license.

---

Developed with 💚 by Cássio Cappellari!
