import { Modal, Row, Col } from "antd";
import microsoftLogo from "../images/microsoftLogo.jpeg";
import windowCross from "../images/windowcross.png";
import React from "react";
import PhoneLogo from "../images/phn.svg";

const AlternateModals = (props) => {
  const pos = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <Modal
      key={props.num}
      footer={null}
      header={null}
      visible={props.isModalVisible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      bodyStyle={{
        height: "320px",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "none",
        padding: "0px",
      }}
      width={600}
      keyboard={false}
      style={{ top: pos(0, 600), right: pos(-600, 600), bottom: pos(0, 600) }}
      mask={false}
      wrapClassName="noCursor"
    >
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

      <Row>
        <Col span={4}>
          <img src={windowCross} id="windowCross" alt="windows cross" />
        </Col>
        <Col span={20}>
          !!アラート!!
          <br /> エラーコード：- 0xdf929.dll
          <br />
          このウイルスは、個人データをハッカーに送信していることが判明しています。マイクロソフトのサポートに連絡して、すぐに削除してください。
          <br />
          <img
            src={PhoneLogo}
            height={15}
            style={{ marginRight: "8px" }}
            alt="phone logo"
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
    </Modal>
  );
};

export default AlternateModals;
