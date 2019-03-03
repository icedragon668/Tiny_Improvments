//this is a db.mongo server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');

const User = require('./models/User')
const UserJSON = require('./UserJSON')
const Kudos = require('./models/Kudos')
const KudosJSON = require('./KudosJSON')

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public")); //alter path as needed

mongoose.connect('mongodb://localhost/kudos_db', {useNewUrlParser: true }) //what is this last bit?
.then(()=>{
    /* Reset and Seed DB
    // mongoose.connection.db.dropDatabase();

    // for (i=0;i<UserJSON.length;i++) {
    //     User.create(UserJSON[i])
    // };
    
    // for (i=0;i<KudosJSON.length;i++) {
    //     Kudos.create(KudosJSON[i])
    // };
    */
}); 

require('./routes/api-routes')(app);


app.listen(PORT, ()=>{
    console.log(`"Kudos" for finding ${PORT}`)
});

/*
//this is a db.SQL server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const path = require('path');
const db = require(path.join(__dirname, "./models"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("./public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({force:false}).then(function(){
    app.listen(PORT, function(){
        console.log(`Ears on ${PORT} good buddy`)
    });
});
*/