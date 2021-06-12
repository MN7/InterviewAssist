import { Component } from "react";
import "../styles.css";

export default class Q001 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q1c1answer: "",
      q1c2answer: "",
      c1useranswer: "",
      c2useranswer: "",
      ce1: { false: "Clear", true: "Show" },
      btnText: { false: "Clear", true: "Calculate" }
    };
  }

  q1 = (a) => {
    console.log("a: " + a);

    return Math.round(a * 100) / 100;
  };

  handleClick = (a, svn) => {
    this.setState({
      [svn]: this.state[svn].length === 0 ? this.q1(a).toString() : ""
    });
  };

  render() {
    const retVal = (
      <div className="sameCol">
        <div>Question 1 - Rounding</div>
        <div>
          <code>01 &emsp; {"function f1(v) {"}</code>
        </div>
        <div>
          <code>02 &emsp; &emsp; {"return Math.round( v * 100 ) / 100"}</code>
        </div>
        <div>
          <code>03 &emsp; {"};"}</code>
        </div>
        <hr />
        <div className="sameLine">
          Case 1: v = 1.23456 &emsp; Your answer:
          <input
            value={this.state.c1useranswer}
            onChange={(e) => {
              this.setState({ c1useranswer: e.target.value });
            }}
          />
          <button
            disabled={this.state.c1useranswer.length === 0}
            onClick={() => {
              this.handleClick(1.23456, "q1c1answer");
            }}
          >
            {this.state.btnText[this.state.q1c1answer.length === 0]}
          </button>
          &emsp;
          {!!this.state.q1c1answer && (
            <label
              className={
                this.state.q1c1answer === this.state.c1useranswer
                  ? "goodjob"
                  : ""
              }
            >
              Computed answer:&emsp;{this.state.q1c1answer}{" "}
              {this.state.q1c1answer === this.state.c1useranswer &&
                "-- Correct answer!"}
            </label>
          )}
        </div>
        <hr />
        <div className="sameLine">
          Case 2: v = 9.87654 &emsp; Your answer:
          <input
            value={this.state.c2useranswer}
            onChange={(e) => {
              this.setState({ c2useranswer: e.target.value });
            }}
          />
          <button
            disabled={this.state.c2useranswer.length === 0}
            onClick={() => {
              this.handleClick(9.87654, "q1c2answer");
            }}
          >
            {this.state.btnText[this.state.q1c2answer.length === 0]}
          </button>
          &emsp;
          {!!this.state.q1c2answer && (
            <label
              className={
                this.state.q1c2answer === this.state.c2useranswer
                  ? "goodjob"
                  : ""
              }
            >
              Computed answer:&emsp;{this.state.q1c2answer}{" "}
              {this.state.q1c2answer === this.state.c2useranswer &&
                "-- Correct answer!"}
            </label>
          )}
        </div>
      </div>
    );

    return retVal;
  }
}
