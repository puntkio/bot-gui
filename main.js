const App = require('./src/App');
const Bot = require('./src/Bot');
const HttpServer = require('./src/HttpServer');
const WSServer = require('./src/WebsocketServer');

let cfg = {
    http: {
        port: 3000
    }
};

let app = new App();
app.init(cfg);

var httpApp = new HttpServer();
var wsApp = new WSServer();

httpApp.initFromApp(app);

cfg.http.server = httpApp.server;

wsApp.init(cfg.http);

httpApp.runServer();
