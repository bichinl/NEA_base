var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var lenguajeSchema = new Schema({
    nombre: {type: String, default: 'Ninguno'},
    icono_url: {type: String, default: 'img/noicon.jpg'},
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Lenguaje', lenguajeSchema);