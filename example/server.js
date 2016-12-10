const http = require('http');

http.createServer(function (request, response) {
	console.log('Path Hit: ' + request.url);

	switch (request.url) {
	case '/': response.end('Home');
		break;
	case '/break': throw new Error('break the server');
		break;
	default: response.end('Path Hit: ' + request.url);
	}

	response.end('Path Hit: ' + request.url);
})
.listen(process.env.PORT, function() {
	console.log('Server Listening On: http://localhost:' + process.env.PORT);
});
