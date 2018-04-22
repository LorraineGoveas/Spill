const User = require('../../models/RegisteredUser');

module.exports = (app) => {

	app.post('/api/registeredUsers', function (req, res, next) { 

      if (req.body.email && req.body.username && req.body.password && req.body.first_name && req.body.last_name) {

   		 var userData = {
      		email: req.body.email,
      		username: req.body.username,
      		password: req.body.password,
      		first_name: req.body.first_name,
      		last_name: req.body.last_name
           }



          User.create(userData, function (error, user) {
           if (error) {
             return next(error);
             } else {
          req.session.userId = user._id;
              return res.redirect('/');
              }
            });
       }

      else if (req.body.logemail && req.body.logpassword) {
        User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
          if (error || !user) 
          {
           var err = new Error('Wrong email or password.');
           err.status = 401;
          return next(err);
          }

         else
          {
       		 req.session.userId = user._id;
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

// GET route after registering
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
          return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email) //+ '<br><a type="button" href="/api/logout">Logout</a>')
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