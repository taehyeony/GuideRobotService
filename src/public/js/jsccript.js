const video = document.getElementById('video'); // take the video element from html

console.log(window.location.host)

Promise.all([
	//promise.all to call these asyncronous calls in parallel which is easy to execute.
	faceapi.nets.tinyFaceDetector.loadFromUri('http://' + window.location.host + '/public/models'),
	faceapi.nets.faceLandmark68Net.loadFromUri('http://' + window.location.host + '/public/models'), //different parts of faces = mouth,nose ,eyes
	faceapi.nets.faceRecognitionNet.loadFromUri('http://' + window.location.host + '/public/models'), //where is the face
	faceapi.nets.faceExpressionNet.loadFromUri('http://' + window.location.host + '/public/models'), //happy ,sad etc
]).then(startVideo);

function startVideo() {
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	//To connect the video element with web cam
	navigator.getUserMedia(
		{ video: {} },
		(stream) => (video.srcObject = stream), //stream method =whats coming from our web cam
		(err) => console.error(err)
	);
}

video.addEventListener('play', async () => {
	//create a canvas for faceapi which will be showed on video element
	const canvas = faceapi.createCanvasFromMedia(video);
	document.body.append(canvas); //to append the canvas inside body
	const displaySize = { width: video.width, height: video.height }; //size of canvas same as video element
	faceapi.matchDimensions(canvas, displaySize);

	setInterval(async () => {
		//얼굴 인식
		//To detect all the faces.
		const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
		//캔버스 안에 요소를 표시
		//Displaying our elements inside the canvas.
		const resizedDetections = faceapi.resizeResults(detections, displaySize);
		//캔버스 초기화
		//To clear the canvas before draw
		canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
		//바운딩 박스 그리기
		// to draw detections on canvas.
		// faceapi.draw.drawDetections(canvas, resizedDetections);

		// 사람 유무 확인
		if (Object.keys(resizedDetections).length === 0) {
			console.log('얼굴이 감지되지 않았습니다.');
		} else {
			console.log('얼굴이 감지되었습니다.');
		}

		//사람의 눈,코,입 랜드마크 라인 그리기
		//To draw the landmarks(eyes,nose,etc)
		//faceapi.draw.drawFaceLandmarks(canvas,resizedDetections)

		// 감정 표시
		//To draw the expressions
		//faceapi.draw.drawFaceExpressions(canvas,resizedDetections)
	}, 1000);
});
