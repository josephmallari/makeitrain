const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendfile(__dirname + '/public/index.html'); 
});

app.get('/yo', (req, res) => {
	res.send('yo');
});

app.listen(process.env.PORT || 3000, () => {
	console.log('listening to port 3000');	
});

