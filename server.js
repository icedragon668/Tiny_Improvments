//this is a db.mongo server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
///
var mongo = require("mongodb").MongoClient;

var dataURL = process.env.MONGOLAB_URI;
var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/HelloMongoose';
///
const User = require('./models/User')
const UserJSON = require('./UserJSON')
const Kudos = require('./models/Kudos')
const KudosJSON = require('./KudosJSON')

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public")); //alter path as needed

///
const uri = "mongodb+srv://root:rootyroot@kudos-db-bdr0d.mongodb.net/kudos-db?retryWrites=true"
// let uri = 'mongodb://heroku_nhmm7mp8:39j5l2tco9e2gaao7jlcvd0426@ds211083.mlab.com:11083/heroku_nhmm7mp8/kudos_db';

mongoose.connect(uri, {useNewUrlParser: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {

/*local mongo
//mongoose.connect('mongodb://localhost/kudos_db', {useNewUrlParser: true }) //what is this last bit?
//.then(()=>{
local mongo */

    //* Reset and Seed DB
    mongoose.connection.db.dropDatabase();

    for (i=0;i<UserJSON.length;i++) {
        User.create(UserJSON[i])
    };
    
    for (i=0;i<KudosJSON.length;i++) {
        Kudos.create(KudosJSON[i])
    };
    //*/
}); 

require('./routes/api-routes')(app);


app.listen(PORT, ()=>{
    console.log(`"Kudos" for finding ${PORT}`)
});
