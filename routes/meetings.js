var express = require('express');
var router = express.Router();


// Encuentros en los que se incluye un usuario
router.get('/user/:id', function(req, res, next){
  res.send("Encuentros del usuario " + req.params.id);
});

// Usuarios y sus posiciones que acudirán al encuentro
router.get('/:id', function(req, res, next){
  res.send("Usuarios (y posiciones) que acudirán a la quedada " + req.params.id);
});

// Nuevo encuentro
router.post('/new', function(req, res, next){
    res.send("Encuentro creado por " + req.body.user + " en latitud: " + req.body.lat + " y longitud: " + req.body.long);
});


module.exports = router;