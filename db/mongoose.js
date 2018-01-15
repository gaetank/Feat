var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/feat');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {

    var athleteSchema = mongoose.Schema({
        name: String,
        forename: String,
        birthdate: Date
    });

    var Athletes = mongoose.model('athletes', athleteSchema);
    Athletes.find(function(err, athletes){
        if(err) return console.error(err);
        console.log(athletes);
    });
});

module.exports = db;