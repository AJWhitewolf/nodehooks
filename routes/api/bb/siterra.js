/**
 * Created by Owen on 4/5/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var payload = req.body;
    console.log(payload);
});

module.exports = router;
