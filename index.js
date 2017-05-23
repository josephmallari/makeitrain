const http = require('http');
const fs = require('fs');

fs.readFile('./index.html', 'utf8', (err, html) => {
	if (err) {
		throw err;
	}

	http.createServer((request, response) => {
		response.writeHeader(200, { "Content-Type": "text/html" });
		response.write(html);
		response.end();

	}).listen(8000);

	console.log('listening on port 8000');
});
