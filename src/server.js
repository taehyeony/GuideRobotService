import http from 'http';
import express from 'express';
// import WebSocket from 'ws';
import bodyParser from 'body-parser';

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '\\views');
app.engine('html', require('ejs').renderFile);
app.use('/public', express.static(__dirname + '/public'));
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.get('/', (req, res) => res.render('index.html'));
app.post('/', (req, res) => {
	let search = req.body.search;
	search = search.split(' ').join('');
	if (search.indexOf('지도') > -1) {
		res.redirect('/capStoneMap');
	} else if (search.indexOf('일정') > -1) {
		res.redirect('/capStoneCalender');
	} else if (search.indexOf('학과소개') > -1) {
		res.redirect('/introduce');
	} else {
		res.redirect('/');
	}
});
app.get('/capStoneMap', (req, res) => res.render('capStoneMap.html'));
app.get('/introduce', (req, res) => res.render('introduce.html'));
app.get('/capStoneCalender', (req, res) => res.render('capStoneCalender.html'));
app.use((req, res) => res.status(404).redirect('/'));

const handleListen = () => console.log('Hello');

//http 서버
const server = http.createServer(app);

server.listen(4000, handleListen);
