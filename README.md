# Project

smart-brain-backend

Live: [@smart-brain](https://smart-brain-frontend-i5sd.onrender.com/)

## Description

In short words: 
- Face detection app which includes clarifai as machine learning api and a front-end with react + backend with node 

As a longer version: 
- It´s a face recognition application with clarifyai api to detect faces on pictures.
The project is an application with includes backend and the frontend. The backend was build with node.js and
portgres database. I used PgAdmin4 for building database and the tables. So, you can easy manage and visualize
these things. The frontend was build with react in v19.

## Getting Started
1. Clone the repository
2. Start your node server
3. Start your frontend
4. Register an user by giving an Name, email and a password
5. Copy a picture url and paste into form field
6. Click Detect button

### Dependencies

* OS windows 10+
* vite@latest
* Node v23.11.x
* express v5.1.x
* nodemon v3.1.x
* pg v8.15.x
* knex v3.1.x
* cors v2.8.x
* bcrypt-node v0.1.x
* clarifai-nodejs-grpc v11.3.x
* dotenv v16.5.x
* react v19.0.0
* react-parallax-tilt v1.7.x
* tachyons v4.12.0

### Installing

* Clone the repository
* So, you have two folders with necessary code: smart-brain-backend and smart-brain-frontend

### Executing program (How to run the program?)

* Go to your Code Editor (i.e. Visual Studio Code)
* Open a new Terminal (Ctrl + ö)
* Change into folder/root smart-brain-backend:

* Type:
```
npm init -y
```
```
npm install
```
```
npm run start
```

* Change into folder/root smart-brain-frontend:
* Type:
```
npm init -y
```
```
npm install
```
```
npm run dev
```

* For production you have to build project:
```
npm run build
```

## Help

Advise for common problems, issues and further improvements.
```
1. Logo goes over complete width of browser -> can be improve
2. URLs should be removed from input field by clicking Detect button -> can be improve
3. Login- and Register-Forms should be removed from input fields after register/login -> can be improve
```

## Authors

- Contributor: Patrick Schubert
- Contact @discord: patrick.munich

## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details

## Acknowledgments

* Site is live on Render.com --> Ability to host static sites, webservices and databases for free (Plan) like I did.
