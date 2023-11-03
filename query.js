"use strict";

const { Post } = require("./db");

async function query() {
	const post = await Post.findByPk(1);
	const comments = await post.getComments();
	console.log(JSON.stringify(comments, null, 2));
}

query();
