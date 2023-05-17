function backbutton() {
    location.href = 'http://127.0.0.1:4000/';
}
function icon1_click(s) {
    //alert(s + ' 버튼을 누르셨습니다.');
    location.href = 'http://127.0.0.1:4000/capStoneMap.html';
}
function icon2_click(s) {
    //alert(s + ' 버튼을 누르셨습니다.');
    location.href = 'http://127.0.0.1:4000/Introduce.html';
}
function icon3_click(s) {
    //alert(s + ' 버튼을 누르셨습니다.');
    location.href = 'http://127.0.0.1:4000/capStoneCalender.html';
}

function toggle_img_voiceRecording() {
    console.log(document.getElementById("icon-recording").src)
    if (document.getElementById("icon-recording").src == "http://localhost:4000/public/img/voicerecording.png") {
        document.getElementById("icon-recording").src = "../public/img/messaging_message_chat_bubble_icon.png"
    } else { 
        document.getElementById("icon-recording").src = "../public/img/voicerecording.png"
    }
}