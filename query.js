"use strict";

const { Post } = require("./db");

async function query() {
	const post = await Post.findByPk(1);
	const comments = await post.getComments();
	const values = comments.map(comment => comment.get());
	console.log(values);
}

query();
