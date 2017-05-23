const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('yo');
});

app.listen(3000, () => {
	console.log('listening to port 3000');	
});

