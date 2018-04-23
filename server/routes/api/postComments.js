const PostComment = require('../../models/PostComments');

module.exports = (app) => {


	app.post('/api/postComments', (req, res, next) => {
    
	var commentData = {
   		date: new Date(),
   		comment: req.body.comment
        }



      Comment.create(commentData, function (error, comment) {
         if (error) {
          return next(error);
        }else {
        res.redirect('/');
         } 

          });






	});












};