const User = require('../models/User');
const Kudos = require('../models/Kudos');

//mongo changes?
module.exports = function (app) {
    app.get('/api/kudos', function (req, res) { //change route
        Kudos.find({})
            // .populate("users")
            .then(function (data) {
                res.json(data);
            })
            .catch(function (error) {
                res.json({ error: error });
            });
    });

    app.get('/api/users', function (req, res) { //change route
        User.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (error) {
                res.json({ error: error });
            });
    });

    app.post('/api/users', function (req, res) {
        User.create(req.body)
          .then(function (data) {
            res.json(data);
          })
          .catch(function (err) {
            res.json(err);
          });
      });

    app.post('/api/kudos', function (req, res) {
        Kudos.create(req.body)
            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            })
    })
}