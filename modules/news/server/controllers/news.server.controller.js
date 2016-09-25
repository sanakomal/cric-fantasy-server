// Setup controller here.

var path = require('path'),
    mongoose = require('mongoose'),
    News = mongoose.model('News'),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

exports.fetch = function(req, res) {
res.jsonp({
    id: 1
});
};