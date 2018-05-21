const PostRecord = require('../../models/PostRecord');

var sanitize = require('mongo-sanitize');

var multer = require('multer')
var upload = multer({dest: 'uploads/'})

var mv = require('mv')

module.exports = (app) => {
    app.get('/api/postRecords', (req, res, next) => {
        PostRecord.find()
        .exec()
        .then((postRecord) => res.json(postRecord))
        .catch((err) => next(err));
    });

    app.post('/api/postRecords/:type/:name/:address/:city/:state/:zip/reportIssue', function (req, res, next) {
        var postRecord = new PostRecord();

        let imageFile = req.file;

        let homePath = __dirname.substring(0,__dirname.length - 18)

        postRecord.location_name = sanitize(req.params.name)
        postRecord.address = sanitize(req.params.address)
        postRecord.type = sanitize(req.params.type)
        postRecord.city = sanitize(req.params.city)
        postRecord.state = sanitize(req.params.state)
        postRecord.zip = sanitize(req.params.zip)
        postRecord.post_title = sanitize(req.params.title)
        postRecord.image_src = `${homePath}/client/public/assets/thumbs/${imageFile.filename}.jpg`

        console.log(imageFile);

        mv(imageFile.path, `client/public/assets/thumbs/${imageFile.filename}.jpg`, function(err) {
            if (err) {
                console.log(err)
            }
        })

        postRecord.save()
        .then(() => res.json(postRecord))
        .catch((err) => next(err));
    });


     app.get('/api/postRecords/:keyword/SearchAnything', (req, res, next) => {
        PostRecord.find( {"$text" : {"$search": sanitize(req.params.keyword)}})
        .exec()
        .then((postRecord) => res.json(postRecord))
        .catch((err) => next(err));
});

    app.get('/api/postRecords/:keyword/locSearch', (req, res, next) => {
        PostRecord.find( { "location_name": new RegExp( sanitize(req.params.keyword), "i" ) } )
        .exec()
        .then((postRecord) => res.json(postRecord))
        .catch((err) => next(err));
    });

    app.get('/api/postRecords/:keyword/:category/catLocSearch', (req, res, next) => {
        PostRecord.find( { "location_name": new RegExp( sanitize(req.params.keyword), "i" ), "type": sanitize(req.params.category)} )
        .exec()
        .then((postRecord) => res.json(postRecord))
        .catch((err) => next(err));
    });

    app.get('/api/postRecords/:category/catSearch', (req, res, next) => {
        PostRecord.find( {"type": sanitize(req.params.category)} )
        .exec()
        .then((postRecord) => res.json(postRecord))
        .catch((err) => next(err));
    });

    app.get('/api/postRecords/allResults', (req, res, next) => {
        PostRecord.find()
        .exec()
        .then((postRecord) => res.json(postRecord))
        .catch((err) => next(err));
    });

};
