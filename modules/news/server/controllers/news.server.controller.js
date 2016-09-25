// Setup controller here.

var path = require('path'),
    request = require('request'),
    mongoose = require('mongoose'),
    config = require(path.resolve('./modules/global/apiConfig')),
    News = mongoose.model('News'),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

exports.fetch = function(req, res) {

// End points. Move these to separate files. 
// TODO: Possibly devise a way to shorten this and refactor this.
var query = '?q=select%20*%20from%20cricket.news%20%20where%20region%3D%22in%22';
var opts = '&diagnostics=true&format=json&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0';
var url = config.api + query + opts;

request.get({
    url: url,
    json: req.payload,
    headers: {
        Accept: 'application/json'
    }
}, (err, httpResponse, body) => {
    if (err) {
        res.jsonp(err);
    } else {
        res.jsonp(body);
    }
});
};