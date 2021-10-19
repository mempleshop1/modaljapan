import { Modal, Row, Col } from "antd";
import windowCross from "../images/windowcross.png";
import microsoftLogo from "../images/microsoftLogo.jpeg";
import React from "react";
import PhoneLogo from "../images/phn.svg";

const MainModal = (props) => {
  return (
    <>
      <Modal
        footer={null}
        header={null}
        centered
        visible={props.isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        bodyStyle={{
          height: "350px",
          fontSize: "18px",
          fontWeight: "bold",
          padding: "0px",
        }}
        width={600}
        keyboard={false}
        wrapClassName="noCursor"
      >
        <div onClick={props.handleCancel}>
          <div
            style={{
              backgroundColor: "#03a5fc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <p style={{ marginBottom: "0px" }}>
              <img
                src={microsoftLogo}
                alt="windows icon"
                height="30px"
                style={{ marginRight: "10px" }}
              />
              C:WINDOWS\SYSTEM32\MSVCR120.dll
            </p>
          </div>

          <Row style={{ marginRight: "20px" }}>
            <Col span={4}>
              <img src={windowCross} id="windowCross" alt="windows" />
            </Col>
            <Col span={20}>
              !!アラート!!
              <br /> エラーコード：- 0xdf929.dll
              <br />
              ウイルススパイウェアが見つかりました
              これにより、コンピュータの速度が低下する可能性があります
              バイナリシステムも、コンピュータのストレージシステムに直接影響するこの深刻な問題の影響を受ける可能性があります{" "}
              <br />
              <img
                src={PhoneLogo}
                height={15}
                style={{ marginRight: "8px" }}
                alt="phone"
              />
              <span style={{ color: "blue", fontSize: "22px" }}>
                {props.phoneNumber}
              </span>
            </Col>
          </Row>

          <br />
          <Row justify="end" style={{ marginRight: "20px" }}>
            <Col>
              <button style={{ width: "100px" }} onClick={props.handleCancel}>
                OK
              </button>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
};

export default MainModal;
