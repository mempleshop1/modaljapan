import React, { useEffect, useState } from "react";
import "./index.scss";
import userPhoto from "../images/user.jpeg";
import windowCross from "../images/windowcross.png";
import firstPic from "../images/1.jpeg";
import secondPic from "../images/2.jpeg";
import thirdPic from "../images/3.jpeg";
import microsoftLogo from "../images/microsoftLogo.jpeg";
import warningIcon from "../images/warning.png";
import beepAudio from "../beep-04.mp3";
import { Modal, Row, Col, message, notification } from "antd";

const Login = (props) => {
  const [audio] = useState(new Audio(beepAudio));
  const [phoneNumber] = useState("050-5479-2376");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    notificationPopup();
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", exitHandler);
    document.addEventListener("webkitfullscreenchange", exitHandler);
    document.addEventListener("mozfullscreenchange", exitHandler);
    document.addEventListener("MSFullscreenChange", exitHandler);

    notificationPopup();
  }, []);

  const notificationPopup = () => {
    notification['error']({
      message: 'ログアウトしました',
      description:
        'ログアウトしました。正しいパスワードでログインしてみてください',
      icon: <img src={warningIcon} height="40px" width="40px"/>
    });
  }

  const exitHandler = () => {
    var fullscreenElement =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullscreenElement ||
      document.msFullscreenElement;

    if (!fullscreenElement) {
      console.log("Leaving full-screen mode...");
    } else {
      console.log("Entering full-screen mode...");
    }
  };

  const loginToDash = () => {
    audio.play();
    audio.loop = true;

    // if(password != ""){
      document.getElementById("transparent-box").style.display="none";
      document.getElementById("chat-box").style.display = "block";
      
      showModal();
    // }else{
      message.error("ログインがブロックされました");
    // }
  };

  return (
    <>
    <div className="login-wrapper" id="login-wrapper">
      <div className="center">
        <div className="container">
    
        <Modal maskClosable={false} footer={null} header={null} centered visible={isModalVisible} onCancel={handleCancel}>
          <p>C:WINDOWS\SYSTEM32\MSVCR120.dll</p>

          <br />

          <Row>
            <Col span={4}>
              <img src={windowCross} id="windowCross" />
            </Col>
            <Col span={20}>
              Windowsのパスワードが危険にさらされています。ファイルへのアクセスは拒否されます。マイクロソフトサポート担当者に連絡してください：{phoneNumber}
            </Col>
          </Row>
          
          <br />
          <Row justify="end">
            <Col>
              <button style={{width: "100px"}} onClick={handleCancel}>OK</button>
            </Col>
          </Row>
        </Modal>

          <img src={userPhoto} className="rounded-circle userPhoto" height="180px" width="180px"/>
          <h1 className="mt-3 microsoftFont" style={{color: "white"}}>一時的なユーザー</h1>
          {/* <input type="text" value={username} readOnly={true} className="usernameField mt-3"/><br /> */}
          {/* <input onKeyPress={keyCheckEnter} id="pass" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="passwordField microsoftFont mt-3"/> */}
          <br />
          <button id="myBtn" type="submit" onClick={loginToDash}>
            ログイン
          </button>

          <div onClick={loginToDash} style={{bottom: 0, left: 0, height: "100px", width: "200px", backgroundColor: "transparent"}} id="transparent-box">
            
          </div>

          <div style={{display: "none"}} id="chat-box">
            <img src={microsoftLogo} />
            <span style={{color: "#222",
              fontSize: "30px",
              fontWeight: "600",
              marginLeft: "6px",
              position: "relative",
              top: "5px"
            }}>
                Microsoft
            </span> 
            <p style={{fontWeight: "600"}}>サポート問い合わせ先</p>
            <h4 style={{fontWeight: "600"}}>
              {phoneNumber}
            </h4>
            <div class="arrow-down">
                <i class="fa fa-caret-down"></i>
            </div>
          </div>

          <img onClick={loginToDash} src={firstPic} className="iconImage1 rounded-circle"/>
          <img onClick={loginToDash} src={secondPic} className="iconImage2 rounded-circle"/>
          <img onClick={loginToDash} src={thirdPic} className="iconImage3 rounded-circle"/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
