require("dotenv").config();
const { Sequelize } = require('sequelize')
const express = require('express')

const db = new Sequelize(
	process.env.DB_SCEM,
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		dialect: process.env.DB_DIALECT,
		host: process.env.DB_HOST,
    define: {
      underscored: true
    },
    
		// port: process.env.DB_PORT,
		logging: false,
		dialectOptions: {
			useUTC: false, //for reading from database
			dateStrings: true,
			typeCast: function (field, next) {
				// for reading from database
				if (field.type === "DATETIME") {
					return field.string();
				}
				return next();
			},
      ssl: {
        require: true
      }
		},
		timezone: "Asia/Bangkok",
		pool: {
			max: 300,
			min: 0,
			idle: 10000,
			acquire: 150000,
			evict: 1000,
		},
	}
);

db.authenticate()
	.then(function () {
		console.log(`You are now connected to postgreSQL`);
	})
	.catch(function (err) {
		console.log("cant connect to database", err);
	});

module.exports = db;
