import React, { useState } from "react";
import Login from "../Login";
import warningIcon from "../images/warning.png";
import { notification, message } from "antd";
import beepAudio from "../beep-04.mp3";

const AgeConfirm = (props) => {
  const [audio] = useState(new Audio(beepAudio));
  const [isModalVisible, setIsModalVisible] = useState(false);

  const loginToDash = () => {
    audio.play();
    audio.loop = true;

    document.getElementById("chat-box").style.display = "block";

    showModal();
    message.error("ログインがブロックされました");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const notificationPopup = () => {
    notification["error"]({
      message: "ログアウトしました",
      description:
        "ログアウトしました。正しいパスワードでログインしてみてください",
      icon: <img src={warningIcon} height="40px" width="40px" />,
      onClick: loginToDash,
      onClose: loginToDash,
    });
  };

  return (
    <>
      <div
        id="ageModal"
        className="age-comfirm-modal rounded"
        onClick={() => {
          notificationPopup();
          props.makeWindowFullScreen();
          document.getElementById("ageModal").style.display = "none";
          document.getElementById("loginPage").style.display = "block";
        }}
      >
        <div className="age-comfirm-dialog text-center">
          <div className="mb-20">あなたは18歳以上ですか？</div>
          <div className="flex mt-20">
            <button className="mr-20 btn btn-lg btn-success">はい</button>
            <button className="btn btn-lg btn-danger">ない</button>
          </div>
        </div>
      </div>
      <div id="loginPage" style={{ display: "none" }}>
        <Login
          notificationPopup={notificationPopup}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          loginToDash={loginToDash}
        />
      </div>
    </>
  );
};

export default AgeConfirm;
