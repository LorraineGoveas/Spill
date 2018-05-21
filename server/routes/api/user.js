const User = require('../../models/User');
const passport = require("passport");
const LocalStrategy   = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const flash = require('connect-flash');

var sanitize = require('mongo-sanitize');



module.exports = (app) => {
    app.get('/api/user', (req, res, next) => {
        User.find()
        .exec()
        .then((user) => res.json(user))
        .catch((err) => next(err));
    });



    app.post('/api/registeredUsers', function (req, res, next) {

      if (req.body.email && req.body.username && req.body.password && req.body.first_name && req.body.last_name && req.body.city && req.body.state && req.body.zip) {

         var userData = {
            email: sanitize(req.body.email),
            username: sanitize(req.body.username),
            password: sanitize(req.body.password),
            first_name: sanitize(req.body.first_name),
            last_name: sanitize(req.body.last_name),
            city: sanitize(req.body.city),
            state: sanitize(req.body.state),
            zip: sanitize(req.body.zip)
           }



          User.create(userData, function (error, user) {
           if (error) {
             return next(error);
             } else {
          req.session.userId = user._id;
          //req.flash('User Registered')
              return res.redirect('/');
              }
            });
       }

      else if (req.body.logemail && req.body.logpassword) {
        User.authenticate(sanitize(req.body.logemail), sanitize(req.body.logpassword), function (error, user) {
          if (!user)
          {

           return res.send({
        success: false,
        message: 'Error: Email cannot be blank.'
      });
          }

         else
          {
             req.session.userId = user._id;
             //req.flash('User Logged In')
             return res.redirect('/');
         }
      });
     }


    else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
     }
});



app.get('/', function (req, res, next) {
   User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        } else {
          return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
        }
      }
});

        
      
    
});


    app.get('/api/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});






};
