'use strict';

var news = require('../controllers/news.server.controller');

// Setup end points here.
module.exports = function(app) {

app.route('/api/news')
    .get(news.fetch);
};
