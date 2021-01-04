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
- [Technologies](#-technologies)
- [How To Use](#-how-to-use)
- [Author](#-author)
- [License](#-license)

## 🚀 About

This application was built from scratch using **JavaScript**, **Node.js**, **Express**, **PostgreSQL**, **SQLite**, **Jest** and **Sequelize** using TDD principles.

## 🗺️ Routes

|route|HTTP Method|params|description
|:---|:---:|:---:|:---:
|`/user`|POST|Request body with `name`, `email` and `password`|Register a user
|`/sessions`|POST|Request body with `email` and `password`|Authenticate user returning a JWT token
|`/dashboard`|GET|Request header with `Bearer` + `JWT token`|Sends a return message if the user is sucessfully authenticated using the token provided in the `/sessions` route

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

## 🤖 Technologies

The project was developed using this technologies:

- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/about/)
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

## 👨‍🚀 Author

**Cássio Cappellari**

- GitHub: [@cassiocappellari](https://github.com/cassiocappellari)
- LinkedIn: [@cassiocappellari](https://www.linkedin.com/in/cassiocappellari/)

## 📝 License

This project is under the [MIT](./LICENSE) license.

---

Developed with 💚 by Cássio Cappellari!
