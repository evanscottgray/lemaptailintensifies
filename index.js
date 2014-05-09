var http = require('http');
var express = require('express'), app = express();
var maptail = require('maptail');
var server = http.createServer(app);

app.use(maptail.track());
app.use('/map', maptail.static());



maptail.attach(server);
	
app.listen(8080, 'localhost');
