<h1 align="center">Express - Backend Boilerplate with MongoDB 1</h1>

This API is updated from previous version with same function as personal project boilerplate for me. With this boilerplate, you can free to use, change, and add any request that you need for your backend website. This API use Express as Nodejs framework and Mongodb as store database. This API documented with Swagger documentation. [More about Express](https://en.wikipedia.org/wiki/Express.js)

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-5.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.23.x-green.svg?style=rounded-square)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v.5.x-green.svg?style=rounded-square)](https://mongodb.com/)


## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://swagger.io/">Swagger</a>
4. Web Server (ex. localhost)
5. <a href="https://www.mongodb.com/try/download/community">MongoDB</a>

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Mongodb can using MongoDB Atlas from website or Third-party tool like MongoDB Compass, etc.
5. Open Postman desktop application or Chrome web app extension that has installed before
6. Choose HTTP Method and enter request url.(ex. localhost:3000/)
7. Type `npm start` to activated the server.
8. Copy this url "http://localhost:3000/api-docs" then open that url on your browser(For 3000, you can change it based on your port that used)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
SERVER_PORT= <YOUR SERVER PORT>
DB_MONGOURI= <YOUR MONGODB DATABASE URL>
JWT_SECRETKEY = <YOUR JWT SECRET KEY>
JWT_EXPIRESTIME = <YOUR JWT EXPIRES TIME>
```

## Feature

1. Login and Register API
2. CRUD Users API

## License

© [Muhammad Akbar Saladin Siregar](https://github.com/akbarsaladin36/)
