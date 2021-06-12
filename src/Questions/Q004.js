import { Component } from "react";
import "../styles.css";

export default class Q004 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c1answer: "",
      c2answer: "",
      c1useranswer: "",
      c2useranswer: "",
      ce1: { false: "Clear", true: "Show" },
      btnText: { false: "Clear", true: "Calculate" }
    };
  }

  f4(iArr, iIdx = 0, oArr = []) {
    if (iIdx === iArr.length) return oArr.pop();
    for (let oIdx = 0; oIdx < oArr.length; oIdx++) {
      if (iArr[iIdx] < oArr[oIdx])
        return this.f4(iArr, iIdx + 1, [
          ...oArr.slice(0, oIdx),
          iArr[iIdx],
          ...oArr.slice(oIdx)
        ]);
    }
    return this.f4(iArr, iIdx + 1, oArr.concat(iArr[iIdx]));
  }

  handleClick(a, svn) {
    this.setState({
      [svn]: this.state[svn].length === 0 ? this.f4(a).toString() : ""
    });
  }

  render() {
    const retVal = (
      <div className="sameCol">
        <div>Question 4 - Array Slice</div>
        <div>
          <code>01 &emsp; {"function f4(iArr, iIdx = 0, oArr = []) {"}</code>
        </div>
        <div>
          <code>
            02 &emsp; &emsp; {"if (iIdx === iArr.length) return oArr.pop();"}
          </code>
        </div>
        <div>
          <code>
            03 &emsp; &emsp;{" "}
            {"for (let oIdx = 0; oIdx < oArr.length; oIdx++) {"}
          </code>
        </div>
        <div>
          <code>
            04 &emsp; &emsp; &emsp; &emsp; {"if (iArr[iIdx] < oArr[oIdx])"}
          </code>
        </div>
        <div>
          <code>
            05 &emsp; &emsp; &emsp; &emsp; {"return f4(iArr, iIdx + 1, ["}
          </code>
        </div>
        <div>
          <code>
            06 &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;{" "}
            {"...oArr.slice(0, oIdx), "}
          </code>
        </div>
        <div>
          <code>
            07 &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {"iArr[iIdx], "}
          </code>
        </div>
        <div>
          <code>
            08 &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {"...oArr.slice(oIdx)"}
          </code>
        </div>
        <div>
          <code>09 &emsp; &emsp; &emsp; &emsp; {"]);"}</code>
        </div>
        <div>
          <code>10 &emsp; &emsp; {"}"}</code>
        </div>
        <div>
          <code>
            11 &emsp; &emsp;{" "}
            {"return f4(iArr, iIdx + 1, oArr.concat(iArr[iIdx]));"}
          </code>
        </div>
        <div>
          <code>12 &emsp; {"};"}</code>
        </div>
        <hr />
        <div className="sameLine">
          Case 1: iArr = [1, 3, 7, 2, 4, 5, 0, 6] &emsp; Your answer:
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
                ? this.handleClick([1, 3, 7, 2, 4, 5, 0, 6], "c1answer")
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
          Case 2: iArr = ["a", "m", "d", "k", "g"] &emsp; Your answer:
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
                ? this.handleClick(["a", "m", "d", "k", "g"], "c2answer")
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
