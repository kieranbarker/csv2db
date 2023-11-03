"use strict";

const csv = require("csv-parser");
const fs = require("fs");

function csvToObj(path) {
	return new Promise(resolve => {
		const results = [];

		fs.createReadStream(path)
			.pipe(csv())
			.on("data", data => results.push(data))
			.on("end", () => {
				resolve(results);
			});
	});
}

module.exports = csvToObj;
