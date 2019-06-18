const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const routes = require('./http/routes');
const middleware = require('./http/middleware');
const views = require('./http/views');

class HttpServer {

    init(cfg) {
        cfg = cfg || {};
        this.cfg = cfg || {};        
        this.expressApp = express();
        this.server = http.createServer(this.expressApp);

        middleware(this.expressApp);
        views(this.expressApp);
        routes(this.expressApp);
    }

    initFromApp(app) {
        this.init(app.cfg.http);
    }

    runServer() {
        let port = this.cfg.port || 3000;
        this.server.listen(port, () => {
            console.log('\u2714  HTTP server started on port', port); 
        });
    }
}

module.exports = HttpServer;