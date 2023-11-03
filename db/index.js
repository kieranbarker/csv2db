"use strict";

const path = require("path");
const { DataTypes, Model, Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "sqlite",
	logging: false,
	storage: path.join(__dirname, "db.sqlite"),
});

class Post extends Model {
	static {
		Post.init(
			{
				title: {
					type: DataTypes.TEXT,
					allowNull: false,
				},
				body: {
					type: DataTypes.TEXT,
					allowNull: false,
				},
			},
			{
				sequelize,
				modelName: "post",
			}
		);
	}
}

class Comment extends Model {
	static {
		Comment.init(
			{
				name: {
					type: DataTypes.TEXT,
					allowNull: false,
				},
				email: {
					type: DataTypes.TEXT,
					allowNull: false,
					validate: {
						isEmail: true,
					},
				},
				body: {
					type: DataTypes.TEXT,
					allowNull: false,
				},
			},
			{
				sequelize,
				modelName: "comment",
			}
		);
	}
}

Post.hasMany(Comment);
Comment.belongsTo(Post, { foreignKey: "postId" });

module.exports = {
	Comment,
	Post,
	sequelize,
};
