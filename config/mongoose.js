// connected to database
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://mithileshmarekar01:rRvn5svux0m4PvFW@issuetracker.xmydjbj.mongodb.net/");


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongodb"));

db.once('open', function(){
    console.log("Connected to Database :: mongodb");
});

module.exports = db;