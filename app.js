require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");
const indexRouter = require('./routes/index');
const { sequelize, Sequelize } = require('./models');
sequelize.sync();

// View
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));
app.locals.pretty = true;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Router
app.use("/", express.static(path.join(__dirname, "./public")));
app.use("/", indexRouter);

// 404 Error
app.use((req, res, next) => {
	res.send('<h1>Not Found - <small>404 Error</small></h1>');
});

// 500 Errors
app.use((err, req, res, next) => {
	console.log(err);
	if(err.message) {
		res.send("<h1>"+err.message+"</h1>");
	}
	else {
		res.send("<h1>알수없는 오류가 발생했습니다. 관리자에게 문의하세요.</h1>");
	}
});

app.listen(process.env.PORT, () => {
	console.log(`http://127.0.0.1:${process.env.PORT}`);
});