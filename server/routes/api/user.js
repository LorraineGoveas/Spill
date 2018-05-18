const User = require('../../models/User');




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
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
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
