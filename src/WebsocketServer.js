const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

class WebsocketServer {
    init(cfg) {
        cfg = cfg || {};
        this.cfg = cfg || {};

        if(this.cfg.server) {
            this.server = this.cfg.server;
        } else {
            this.expressApp = express();
            this.server = http.createServer(this.expressApp);
        }
        
        this.io = socketio.listen(this.server);
    }

    initFromApp(app) {
        this.init(app.cfg.http);
    }

    runServer() {
        let port = this.cfg.port || 3000;
        this.server.listen(port, () => {
            console.log('\u2714  Websocket server started on port', port); 
        });
    }
}

module.exports = WebsocketServer;