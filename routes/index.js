var express = require('express');
var router = express.Router();
var tittle = 'Lab. Multimedia';
var ssn ;

/* GET home page. */
router.get('/', function(req, res, next) {
    ssn = req.session;
    if(!ssn.email){
        ssn.email=req.query.email;
    }
  res.render('index', { title: tittle , username: ssn.email });
});

router.post('/', function(req, res, next) {
    ssn = req.session;
    if(!ssn.email){
        ssn.email=req.query.email;
    }
    res.render('index', { title: tittle , username: ssn.email });
});

router.get('/cerrarsession', function(req, res, next) {
    req.session.email = null;
    res.render('index', { title: tittle });
});

module.exports = router;
