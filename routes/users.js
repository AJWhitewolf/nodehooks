var express = require('express');
var router = express.Router();
var net = require('net');



var client = new net.Socket();
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource')
    console.log("Testing console");
    client.connect(6006, '127.0.0.1', function(){
        client.write("git restart");
        client.destroy();
    });
    res.sendStatus(200);
});

module.exports = router;
