import React from "react";
import style from "./App.css";
import "./styles.scss";
import ReactDOM from "react-dom";
import { Facebook, Twitter } from "react-sharingbuttons";

const buttonStyle = {
  textAlign: "center",
  margin: "10px",
  padding: "5px",
  fontSize: "15px",
  fontFamily: "Helvetica",
  float: "left",
  borderRadius: "4px",
};

class ButtonFacebook extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <Facebook style={buttonStyle} url={"https://www.facebook.com/"} />;
  }
}

export default ButtonFacebook;
