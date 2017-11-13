var moongose = require('mongoose');

var loginSchema = moongose.Schema({
    user: String,
    password: String
},
// Es necesario especificar la colección a la que pertenece el esquema
{
    collection: 'login'
});

var meetingsSchema = moongose.Schema({
    name: String,
    position: {
        lat: Number,
        long: Number
    },
    users: [String]
},
// Es necesario especificar la colección a la que pertenece el esquema
{
    collection: 'meetings'
});

var positionsSchema = moongose.Schema({
    user: String,
    position: {
        lat: Number,
        long: Number
    }
},
// Es necesario especificar la colección a la que pertenece el esquema
{
    collection: 'positions'
});


exports.login = moongose.model('Login', loginSchema);
exports.meetings = moongose.model('Meetings', meetingsSchema);
exports.positions = moongose.model('Positions', positionsSchema);