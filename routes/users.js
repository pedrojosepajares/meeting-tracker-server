var express = require('express');
var router = express.Router();
var models = require('../db/models');

// Información del usuario
router.get('/:user', function(req, res, next){
  console.log("Recibida petición de información para " + req.params.user);  
  models.login.findOne({user: req.params.user}, function(err, userInformation){
    if (!userInformation) res.send("No existe usuario");
    else res.send(userInformation);
  });
});

// Login de usuario
router.post('/login', function(req, res, next){
  console.log("Recibida petición de login para " + req.body.user + "/" + req.body.password);
  models.login.findOne({user: req.body.user}, function(err, userInformation){
    if (userInformation.password == req.body.password) res.send("Login existoso");
    else res.send("Fallo en login");    
  });
});

module.exports = router;
