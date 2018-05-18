const mongoose = require('mongoose');

const PostCommentsSchema = new mongoose.Schema({

    post_Id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'PostRecord'
        
    },
    author_Id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'RegisteredUser'
        
    },
    date: {
        type: Date
         
        
    },
    time: {
        type: String,
        default: ''
    },
    comment: {
        type: String,
        default: ''
    }




});

var Comment = mongoose.model('PostComment', PostCommentsSchema);
module.exports = Comment;

