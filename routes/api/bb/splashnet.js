var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var payload = req.body;
    console.log(payload);
    res.sendStatus(200);
});

module.exports = router;
