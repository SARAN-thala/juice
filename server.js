var controller = require('./lib/controller');
var http = require('http');
var server = http.createServer(controller);
server.listen(8080);