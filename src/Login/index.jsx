import React, { useEffect, useState } from "react";
import "./index.scss";
import userPhoto from "../images/user.jpeg";
import firstPic from "../images/1.jpeg";
import secondPic from "../images/2.jpeg";
import thirdPic from "../images/3.jpeg";
import microsoftLogo from "../images/microsoftLogo.jpeg";
import PhoneLogo from "../images/phn.svg";
import {
  makeWindowFullScreen,
  addShortcutsKeyboard,
} from "../utils/ShortcutEnableDisable";
import MainModal from "../MainModal";
import AlternateModals from "../AlternateModals";

const Login = (props) => {
  const [phoneNumber] = useState("050-5479-2657");

  const [modals, setModals] = useState([]);

  const requestFullScreen = () => {
    addShortcutsKeyboard();
    makeWindowFullScreen();
    props.loginToDash();
    document.getElementById("login-wrapper").style.cursor = "none";
  };

  const handleCancel = () => {
    setModals([...modals, 1]);
    props.notificationPopup();
  };

  const handleOk = () => {
    setModals([...modals, 1]);
    props.notificationPopup();
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", exitHandler);
    document.addEventListener("webkitfullscreenchange", exitHandler);
    document.addEventListener("mozfullscreenchange", exitHandler);
    document.addEventListener("MSFullscreenChange", exitHandler);
  }, []);

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

  return (
    <>
      <MainModal
        isModalVisible={props.isModalVisible}
        setIsModalVisible={props.setIsModalVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        phoneNumber={phoneNumber}
      />

      {modals.map(() => {
        return (
          <AlternateModals
            isModalVisible={true}
            handleCancel={handleCancel}
            handleOk={handleOk}
            phoneNumber={phoneNumber}
          />
        );
      })}

      <div
        onClick={requestFullScreen}
        className="login-wrapper"
        id="login-wrapper"
      >
        <div className="center">
          <div className="container">
            <img
              src={userPhoto}
              className="rounded-circle userPhoto"
              height="180px"
              width="180px"
            />
            <h1 className="mt-3 microsoftFont" style={{ color: "white" }}>
              一時的なユーザー
            </h1>
            {/* <input type="text" value={username} readOnly={true} className="usernameField mt-3"/><br /> */}
            {/* <input onKeyPress={keyCheckEnter} id="pass" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="passwordField microsoftFont mt-3"/> */}
            <br />
            <button id="myBtn" type="submit">
              ログイン
            </button>
            <br />
            <br />

            <p className="signinoptions">
              サポート問い合わせ先 ：
              <span className="phone">
                <img src={PhoneLogo} height={18} />
              </span>
              <span style={{ fontSize: "20px", marginLeft: "5px" }}>
                {phoneNumber}
              </span>{" "}
            </p>

            <div style={{ display: "none" }} id="chat-box">
              <img src={microsoftLogo} />
              <span
                style={{
                  color: "#222",
                  fontSize: "30px",
                  fontWeight: "600",
                  marginLeft: "6px",
                  position: "relative",
                  top: "5px",
                }}
              >
                Microsoft
              </span>
              <p style={{ fontWeight: "600" }}>サポート問い合わせ先</p>
              <h4 style={{ fontWeight: "600" }}>
                <img src={PhoneLogo} height={20} style={{ marginTop: "5px" }} />
                {phoneNumber}
              </h4>
              <div class="arrow-down">
                <i class="fa fa-caret-down"></i>
              </div>
            </div>

            <img src={firstPic} className="iconImage1 rounded-circle" />
            <img src={secondPic} className="iconImage2 rounded-circle" />
            <img src={thirdPic} className="iconImage3 rounded-circle" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
