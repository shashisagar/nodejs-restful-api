'use strict';
var express = require('express');
var router = express();
var _ = require('underscore');
var mysql = require('../../globalOperations/dbOperations/mysql.js');


router.post('/get-free-driver-api', function(req, res) {
	if (req.body) {
		var data = req.body;
		var query = 'SELECT id,driverName,latitude, longitude, SQRT(POW(69.1 * (latitude - ' + data.latitude + '), 2) + POW(69.1 * (' + data.longitude + ' - longitude) * COS(latitude / 57.3), 2)) AS distance FROM drivers where status = "free" HAVING (distance < 5 OR distance < 10) ORDER BY distance;';
		mysql.customQuery(query, function(response) {
			var count = response.data.length;
			if (count > 0) {
				var newResponse = _.map(response.data, function(o) {
					return _.omit(o, 'distance');
				});
				res.json({
					code: 200,
					err: null,
					count: count,
					data: newResponse
				});
			} else {
				res.json({
					code: 404,
					err: 'No data found',
					count: count,
					data: null
				});
			}
		});
	} else {
		res.json({
			code: 198,

			err: 'Input is missing.'
		});
	}
});

router.post('/search-driver-api', function(req, res) {
	if (req.body) {
		var data = req.body;
		var query = 'select id,driverName,latitude,longitude,status from drivers where driverName = "' + data.driverName + '";';
		mysql.customQuery(query, function(response) {
			var count = response.data.length;
			if (count > 0) {
				res.json({
					code: 200,
					err: null,
					count: count,
					data: response
				});
			} else {
				res.json({
					code: 404,
					err: 'No data found',
					count: count,
					data: null
				});
			}
		});
	} else {
		res.json({
			code: 198,
			err: 'Input is missing.'
		});
	}
});

router.post('/myapp', function(req, res) {

	console.log("aaa");
	res.json({
		code: 200,
		err: null,
		data: response
	});
});


module.exports = router;


