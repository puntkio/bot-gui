'use strict';
const view_engine = require('ejs-locals');
const path = require('path');

module.exports = function(app) {

    app.engine('ejs', view_engine);
	app.set('views', path.join(__dirname, '../../views'));
	app.set('view engine', 'ejs');
    app.set('view cache', false);
    
};