import React from "react";
import Login from "../Login";
import warningIcon from "../images/warning.png";
import { notification } from "antd";


const AgeConfirm = (props) => {
  const notificationPopup = () => {
    notification['error']({
      message: 'ログアウトしました',
      description:
        'ログアウトしました。正しいパスワードでログインしてみてください',
      icon: <img src={warningIcon} height="40px" width="40px"/>
    });
  }
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
                        <button className="mr-20 btn btn-lg btn-success">
                            はい
                        </button>
                        <button className="btn btn-lg btn-danger">ない</button>
                    </div>
                </div>
            </div>
            <div id="loginPage" style={{display: "none"}}>
              <Login />
            </div>
        </>
    );
};

export default AgeConfirm;
