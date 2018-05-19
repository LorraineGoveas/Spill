const PostRecord = require('../../models/PostRecord');

var sanitize = require('mongo-sanitize');

module.exports = (app) => {
    app.get('/api/postRecords', (req, res, next) => {
        PostRecord.find()
        .exec()
        .then((postRecord) => res.json(postRecord))
        .catch((err) => next(err));
    });

    app.post('/api/postRecords/:type/:name/:address/:city/:state/:zip/reportIssue', function (req, res, next) {
        var postRecord = new PostRecord();

        postRecord.location_name = sanitize(req.params.name)
        postRecord.address = sanitize(req.params.address)
        postRecord.type = sanitize(req.params.type)
        postRecord.city = sanitize(req.params.city)
        postRecord.state = sanitize(req.params.state)
        postRecord.zip = sanitize(req.params.zip)

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
