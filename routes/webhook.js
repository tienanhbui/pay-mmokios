var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/notification', function(req, res, next) {
    res.send('OK');
});


module.exports = router;
