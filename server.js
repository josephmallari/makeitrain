const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/yo', (req, res) => {
	res.send('yo');
});

app.listen(process.env.PORT || 3000, () => {
	console.log('listening to port 3000');	
});

