import { Component } from "react";
import "../styles.css";

export default class Q002 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c1useranswer: "",
      c2useranswer: "",
      c1answer: "",
      c2answer: "",
      ce1: { false: "Clear", true: "Show" },
      btnText: { false: "Clear", true: "Calculate" }
    };
  }

  q2(paragraph) {
    return Math.max(...paragraph.split(" ").map((w) => w.length));
  }

  handleClick = (a, svn) => {
    this.setState({
      [svn]: this.state[svn].length === 0 ? this.q2(a).toString() : ""
    });
  };

  render() {
    const retVal = (
      <div className="sameCol">
        <div>Question 2 - Paragraph Split</div>
        <div>
          <code>01 &emsp; {"const f2 = (paragraph) => {"}</code>
        </div>
        <div>
          <code>02 &emsp; &emsp; {"return Math.max("}</code>
        </div>
        <div>
          <code>
            03 &emsp; &emsp; &emsp;{" "}
            {"...paragraph.split(' ').map(w => w.length)"}
          </code>
        </div>
        <div>
          <code>04 &emsp; &emsp; &emsp; {");"}</code>
        </div>
        <div>
          <code>05 &emsp; {"}"}</code>
        </div>
        <hr />
        <div className="sameLine">
          Case 1: paragraph = 'Two plus two equals four' &emsp; Your answer:
          <input
            value={this.state.c1useranswer}
            onChange={(e) => {
              this.setState({ c1useranswer: e.target.value });
            }}
          />
          <button
            disabled={this.state.c1useranswer.length === 0}
            onClick={() => {
              this.state.c1answer.length === 0
                ? this.handleClick("Two plus two equals four", "c1answer")
                : this.setState({
                    c1answer: "",
                    c1useranswer: ""
                  });
            }}
          >
            {this.state.btnText[this.state.c1answer.length === 0]}
          </button>
          {!!this.state.c1answer.length && (
            <label
              className={
                this.state.c1answer === this.state.c1useranswer ? "goodjob" : ""
              }
            >
              Computed answer:&emsp;{this.state.c1answer}{" "}
              {this.state.c1answer === this.state.c1useranswer &&
                "-- Correct answer!"}
            </label>
          )}
        </div>
        <hr />
        <div className="sameLine">
          Case 2: paragraph = 'This paragraph is not very long as it comprises
          only of one sentence' &emsp; Your answer:
          <input
            value={this.state.c2useranswer}
            onChange={(e) => {
              this.setState({ c2useranswer: e.target.value });
            }}
          />
          <button
            disabled={this.state.c2useranswer.length === 0}
            onClick={() => {
              this.state.c2answer.length === 0
                ? this.handleClick(
                    "This paragraph is not very long as it comprises only of one sentence",
                    "c2answer"
                  )
                : this.setState({
                    c2answer: "",
                    c2useranswer: ""
                  });
            }}
          >
            {this.state.btnText[this.state.c2answer.length === 0]}
          </button>
          {!!this.state.c2answer.length && (
            <label
              className={
                this.state.c2answer === this.state.c2useranswer ? "goodjob" : ""
              }
            >
              Computed answer:&emsp;{this.state.c2answer}{" "}
              {this.state.c2answer === this.state.c2useranswer &&
                "-- Correct answer!"}
            </label>
          )}
        </div>
      </div>
    );

    return retVal;
  }
}
