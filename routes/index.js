const router = require('express').Router();
const { Notice } = require('../models');


router.get("/", (req, res, next) => {
	res.send("<h1>Hello</h1>");
});

//Create
router.get("/write", async (req, res, next) => {
	await Notice.create({
		title: "테스트",
		writer: "관리자",
		content: "만들어!"
	});
	res.redirect("/list");
});

//Delete
router.get("/remove/:id", async (req, res, next) => {
	await Notice.destroy({
		where: {
			id: req.params.id
		}
	});
	res.redirect("/list");
});

// Read
router.get("/list", async (req, res, next) => {
	const result = await Notice.findAll({
		order: [["id", "desc"]]
	});
	res.json(result);
});

//Update
router.get("/update", async (req, res, next) => {
	const result = await Notice.update({
		title: "바꿔",
		writer: "신입",
		content: "다바꿔!"
	}, {
		where: {
			id: 3
		}
	});
	res.redirect("/list");
});

module.exports = router;