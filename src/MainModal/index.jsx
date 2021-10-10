import { Modal, Row, Col } from "antd";
import windowCross from "../images/windowcross.png";
import React from "react";
import PhoneLogo from "../images/phn.svg";

const MainModal = (props) => {
    return (
        <>
            <Modal
                maskClosable={false}
                footer={null}
                header={null}
                centered
                visible={props.isModalVisible}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
                bodyStyle={{height: "300px", fontSize: "18px", fontWeight: "bold"}}
                width={600}
                keyboard={false}
                wrapClassName="noCursor"
                maskStyle={{background: "blue"}}
            >
                <p>C:WINDOWS\SYSTEM32\MSVCR120.dll</p>

                <br />

                <Row>
                    <Col span={4}>
                        <img src={windowCross} id="windowCross" />
                    </Col>
                    <Col span={20}>
                        Windowsのパスワードが危険にさらされています。ファイルへのアクセスは拒否されます。マイクロソフトサポート担当者に連絡してください：
                        <img
                            src={PhoneLogo}
                            height={15}
                            style={{ marginRight: "8px" }}
                        />
                        {props.phoneNumber}
                    </Col>
                </Row>

                <br />
                <Row justify="end">
                    <Col>
                        <button
                            style={{ width: "100px" }}
                            onClick={props.handleCancel}
                        >
                            OK
                        </button>
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default MainModal;