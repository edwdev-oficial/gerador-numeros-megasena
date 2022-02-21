const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/numerosMegaSena');
mongoose.Promise = global.Promise;

module.exports = mongoose;