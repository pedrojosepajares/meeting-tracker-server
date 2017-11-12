var express = require('express');
var router = express.Router();


// Información del usuario
router.get('/:id', function(req, res, next){
  res.send("Información del usuario " + req.params.id);
});

// Login de usuario
router.post('/login', function(req, res, next){
  res.send("Login del usuario: " + req.body.user + " con password: " + req.body.password);
});

module.exports = router;
