var express = require('express');
var router = express.Router();
var models = require('../db/models');



// Encuentros en los que se incluye un usuario
router.get('/user/:user', function(req, res, next){
  console.log("Petición para encuentros del usuario " + req.params.user);
  // Selecciona encuentros en los que participa :user
  models.meetings.find({users: req.params.user}, function(err, userMeetings){
    if (userMeetings.length == 0) res.send("El usuario no pertenece a ningún encuentro");
    else res.send(userMeetings);
  });
});

// Usuarios y sus posiciones que acudirán al encuentro
router.get('/:id', function(req, res, next){
  console.log("Petición de usuarios y posiciones que acudirán al encuentro " + req.params.id);
  // Selecciona todos los usuarios que participan en id:
  models.meetings.findOne({_id: req.params.id}, 'users', function(err, usersInMeeting){
    models.positions.find({user: {$in: usersInMeeting.users}}, function(err, usersPositions){
      res.send(usersPositions);
    });
  });
    
});

// Nuevo encuentro
router.post('/new', function(req, res, next){
    var meeting = new models.meetings({
      name: req.body.name,
      position: req.body.position,
      users : req.body.users
    });

    meeting.save(function(err, meeting){
      if (err) res.send(err);
      else res.send("Encuentro guardado satisfactoriamente");
    });
});


module.exports = router;