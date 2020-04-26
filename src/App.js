import React from "react";
import logo from "./logo.svg";
import style from "./App.css";
import "./styles.scss";
import { Facebook, Twitter } from "react-sharingbuttons";
import "react-sharingbuttons/dist/main.css";

const containerStyle = {
  background: "white",
  height: "100%",
  width: "500px",
  padding: "20px",
  paddingBottom: "70px",
  margin: "auto",
  marginTop: "80px",
  borderRadius: "6px",
};

const buttonContainerStyle = {
  textAlign: "center",
  background: "",
};

const buttonStyle = {
  textAlign: "center",
  color: "white",
  background: "grey",
  margin: "5px",
  padding: "5px",
  width: "120px",
  height: "35px",
  fontSize: "15px",
  fontFamily: "Helvetica",
  float: "right",
  borderRadius: "6px",
  borderColor: "transparent",
};

const authorStyle = {
  textAlign: "right",
};

var quoteArray = [
  ["Act as if what you do makes a difference.", "William James"],
  [
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Winston Churchill",
  ],
  [
    "Never bend your head. Always hold it high. Look the world straight in the eye.",
    "Helen Keller",
  ],
  [
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Zig Ziglar",
  ],
  ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
  ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
  ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
  ["Argue with idiots, and you become an idiot.", "Paul Graham"],
  ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
  ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"],
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomIndex: Math.floor(Math.random() * quoteArray.length),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      randomIndex: Math.floor(Math.random() * quoteArray.length),
    });
  }
  render() {
    var answerQuote = quoteArray[this.state.randomIndex][0];
    var answerAuthor = quoteArray[this.state.randomIndex][1];
    return (
      <div id="quote-box" style={containerStyle}>
        <div id="text">
          <h1>"{answerQuote}"</h1>
        </div>
        <div id="author">
          <h3 style={authorStyle}>-{answerAuthor}</h3>
        </div>
        <div>
          <Facebook />
          <a id="tweet-quote" href="twitter.com/intent/tweet">
            <Twitter shareText={answerQuote} />
          </a>
          <button id="new-quote" onClick={this.handleClick} style={buttonStyle}>
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default App;
