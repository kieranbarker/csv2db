"use strict";

const csvToObj = require("./csvToObj");
const { Comment, Post, sequelize } = require("./db");

async function seed() {
	await sequelize.sync({ force: true });

	const posts = await csvToObj("./csv/posts.csv");
	await Post.bulkCreate(posts);
	console.log("Posts created");

	const comments = await csvToObj("./csv/comments.csv");
	await Comment.bulkCreate(comments);
	console.log("\nComments created");
}

seed();
