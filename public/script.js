const peer = new Peer();

window.peer = peer;

function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then((stream) => {
      window.localStream = stream; // A
      window.localAudio.srcObject = stream; // B
      window.localAudio.autoplay = true; // C
    })
    .catch((err) => {
      console.log(err);
    });
}

getLocalStream();

peer.on("open", function () {
  window.caststatus.textContent = ``;
});

const audioContainer = document.querySelector(".call-container");
/**
 * Displays the call button and peer ID
 * @returns{void}
 */

function showCallContent() {
  window.caststatus.textContent = ``;
  callBtn.hidden = false;
  audioContainer.hidden = true;
}

/**
 * Displays the audio controls and correct copy
 * @returns{void}
 */

function showConnectedContent() {
  window.caststatus.textContent = ``;
  callBtn.hidden = true;
  audioContainer.hidden = false;
}

let code;
function getStreamCode() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open(
    "GET",
    "https://japancallrouting.herokuapp.com/findfreeadmin",
    false
  );
  xmlHttp.send(null);

  code = JSON.parse(xmlHttp.response).peerid;
}

let conn;
function connectPeers() {
  conn = peer.connect(code);
}

peer.on("connection", function (connection) {
  conn = connection;
});

const callBtn = document.querySelector(".call-btn");

callBtn.addEventListener("click", function () {
  getStreamCode();
  connectPeers();
  const call = peer.call(code, window.localStream); // A

  call.on("stream", function (stream) {
    // B
    window.remoteAudio.srcObject = stream; // C
    window.remoteAudio.autoplay = true; // D
    window.peerStream = stream; //E
    showConnectedContent(); //F
  });
});

peer.on("call", function (call) {
  const answerCall = confirm("Do you want to answer?");

  if (answerCall) {
    call.answer(window.localStream); // A
    showConnectedContent(); // B
    call.on("stream", function (stream) {
      // C
      window.remoteAudio.srcObject = stream;
      window.remoteAudio.autoplay = true;
      window.peerStream = stream;
    });
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("call-btn");
  } else {
    console.log("call denied"); // D
  }
});
