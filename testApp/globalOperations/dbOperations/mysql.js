var apiConfig = require('../../configurations/config.js');
var mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimit: 100,
	host: apiConfig.mysql.host,
	user: apiConfig.mysql.user,
	password: apiConfig.mysql.password,
	database: apiConfig.mysql.name
});

exports.customQuery = function(queryString, callback) {
	pool.getConnection(function(err, connection) {
		if (err) {
			connection.release();
			callback({
				error: err
			});
		}
		connection.query(queryString, function(err1, rows) {
			if (err1) {
				connection.release();
				callback({
					error: err1
				})
			} else {
				connection.release();
				callback({
					data: rows
				})
			}

		});
	});
};