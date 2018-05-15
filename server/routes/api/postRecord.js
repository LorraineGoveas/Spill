const PostRecord = require('../../models/PostRecord');

module.exports = (app) => {
    app.get('/api/postRecords', (req, res, next) => {
        PostRecord.find()
        .exec()
        .then((postRecord) => res.json(postRecord))
        .catch((err) => next(err));
    });

    app.post('/api/postRecords/:type/:name/:address/:city/:state/:zip/reportIssue', function (req, res, next) {
        var postRecord = new PostRecord();

        postRecord.location_name = req.params.name
        postRecord.address = req.params.address
        postRecord.type = req.params.type
        postRecord.city = req.params.city
        postRecord.state = req.params.state
        postRecord.zip = req.params.zip

        postRecord.save()
        .then(() => res.json(postRecord))
        .catch((err) => next(err));
    });

    app.get('/api/postRecords/:keyword/locSearch', (req, res, next) => {
        PostRecord.find( { "location_name": new RegExp( req.params.keyword, "i" ) } )
        .exec()
        .then((postRecord) => res.json(postRecord))
        .catch((err) => next(err));
    });

    app.get('/api/postRecords/:keyword/:category/catLocSearch', (req, res, next) => {
        PostRecord.find( { "location_name": new RegExp( req.params.keyword, "i" ), "type": req.params.category} )
        .exec()
        .then((postRecord) => res.json(postRecord))
        .catch((err) => next(err));
    });

    app.get('/api/postRecords/:category/catSearch', (req, res, next) => {
        PostRecord.find( {"type": req.params.category} )
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
