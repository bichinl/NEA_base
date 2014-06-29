var express = require('express');
var router = express.Router();

var Lenguaje = require('../models/lenguaje.js');

/* GET home page */
router.get('/', function(req, res) {
	Lenguaje.find(function(err, lenguajes) {
		if (err)
			res.send(err);
		res.render('index');
	});
});



router.get('/partials/:name', function(req, res) {
    var name = req.params.name;
    var path = req.url;
    res.render('partials/'+name,{title:'this is a partial'});
});

module.exports = router;