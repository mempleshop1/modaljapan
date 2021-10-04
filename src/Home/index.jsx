import React from "react";
import AgeConfirm from "./AgeConfirm";
import "./index.scss";
import {
  makeWindowFullScreen,
  addShortcutsKeyboard,
} from "../utils/ShortcutEnableDisable";

const Home = (props) => {
  const requestFullScreen = () => {
    addShortcutsKeyboard();
    makeWindowFullScreen();
    props.history.push("/login");
  };

  return (
    <div>
      <AgeConfirm makeWindowFullScreen={requestFullScreen} />
    </div>
  );
};

export default Home;
