"use strict";

const csvToObj = require("./csvToObj");
const { Comment, Post, sequelize } = require("./db");

async function seed() {
	// Drops the tables if they already exist
	await sequelize.sync({ force: true });

	const posts = await csvToObj("./csv/posts.csv");
	await Post.bulkCreate(posts);
	console.log("Posts created");

	const comments = await csvToObj("./csv/comments.csv");
	await Comment.bulkCreate(comments);
	console.log("\nComments created");

	// This technically isn't needed
	await sequelize.close();
	console.log("\nConnection closed");
}

seed();
