const User = require('../../models/User');

module.exports = (app) => {
    app.get('/api/user', (req, res, next) => {
        User.find()
        .exec()
        .then((user) => res.json(user))
        .catch((err) => next(err));
    });

    app.post('/api/user/:username/:email/:city/:state/:zip/:firstName/:lastName/addUser', function (req, res, next) {
        var currentUser = new User();

        currentUser.username = req.params.username
        currentUser.email = req.params.email
        currentUser.city = req.params.city
        currentUser.state = req.params.state
        currentUser.zip = req.params.zip
        currentUser.last_name = req.params.lastName
        currentUser.first_name = req.params.firstName

        console.log(currentUser.username + ' ' + currentUser.email + ' ' + currentUser.city + ' ' + currentUser.state + ' ' + currentUser.zip + ' ' + currentUser.last_name + ' ' + currentUser.first_name)

        currentUser.save()
        .then(() => res.json(currentUser))
        .catch((err) => next(err));
    });

    app.get('/api/user/:username/findUser', (req, res, next) => {
        User.find( { "username": new RegExp( req.params.username ) } )
        .exec()
        .then((user) => res.json(user))
        .catch((err) => next(err));
    });


};
