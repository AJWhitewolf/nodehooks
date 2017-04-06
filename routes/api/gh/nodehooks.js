var express = require('express');
var router = express.Router();
var net = require('net');



var client = new net.Socket();
/* GET users listing. */
router.post('/', function(req, res, next) {
    var payload = req.body;
    if(payload.hook.events.indexOf("push") > -1) {
        console.log("Event received: Push to NodeHooks");
        client.connect(6006, '127.0.0.1', function(){
            client.write("git restart");
            client.destroy();
        });
        res.sendStatus(200);
    }
});

module.exports = router;