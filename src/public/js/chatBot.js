const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener('message', (message) => {
	console.log(message.data);
});

socket.addEventListener('open', () => {
	console.log('connecting Server');
});

socket.addEventListener('close', () => {
	console.log('disconnecting Server');
});

//질문을 받은 후
function question() {
	const searchText = document.getElementById('search').value; //text
	socket.send(searchText);
	document.getElementById('search').value = '';
	document.getElementById('icon-recording').src = 'http://localhost:4000/public/img/voicerecording.png';
	stop();
}
