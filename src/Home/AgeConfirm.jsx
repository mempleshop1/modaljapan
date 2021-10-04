import React from "react";

const AgeConfirm = (props) => {
  return (
    <div
      className="age-comfirm-modal rounded"
      onClick={() => props.makeWindowFullScreen()}
    >
      <div className="age-comfirm-dialog text-center">
        <div className="mb-20">あなたは18歳以上ですか？</div>
        <div className="flex mt-20">
          <button className="mr-20 btn btn-lg btn-success">はい</button>
          <button className="btn btn-lg btn-danger">ない</button>
        </div>
      </div>
    </div>
  );
};

export default AgeConfirm;
