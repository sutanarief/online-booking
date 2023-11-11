# Online Boking API

Online Booking API is an application for teachers and students to discuss, which provides a feature to post answers to any questions that have been made by other users.


# Prerequisites

Before you begin, ensure you have met the following requirements:
* Node JS v20.9.0
* Deployed PostgreSQL database ( you can deploy it in [Vercel](https://vercel.com/) )

# Using Online Boking API
Add .env file with these variables
```env
DB_HOST=<your deployed database host>
DB_DIALECT=<database dialect>
DB_USER=<database user>
DB_PASS=<database password>
DB_SCEM=<databse scem>

SECRET="<your secret words for jwt>"
```


Installing dependencies :
```
npm install
```
Run application :
```
npm run start
```
Run application with nodemon (*if you have installed nodemon*) :
```
npm run dev
```

# API Documentation
See all API Documentation on [OnlineBooking Postman Documenter](https://documenter.getpostman.com/view/29809215/2s9YXk3LzU)