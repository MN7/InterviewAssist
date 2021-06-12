import { Component } from "react";
import "../styles.css";

export default class Q002 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  q2 = (a) => {};

  handleClick = (a) => {
    this.setState({});
  };

  render() {
    const retVal = (
      <div className="sameCol">
        <div>Question 3 - Key Value Pairs</div>
        <div>
          <code>01 &emsp; {"function f3 (arr) {"}</code>
        </div>
        <div>
          <code>02 &emsp; &emsp; {"const res = {};"}</code>
        </div>
        <div>
          <code>
            03 &emsp; &emsp; {"for (let i = 0; i < arr.length; i++) {"}
          </code>
        </div>
        <div>
          <code>04 &emsp; &emsp; &emsp; {"const val = res[arr[i]] || 0;"}</code>
        </div>
        <div>
          <code>05 &emsp; &emsp; &emsp; {"res[arr[i]] = val + 1;"}</code>
        </div>
        <div>
          <code>06 &emsp; &emsp; {"}"}</code>
        </div>
        <div>
          <code>07 &emsp; &emsp; {"return res;"}</code>
        </div>
        <div>
          <code>08 &emsp; {"}"}</code>
        </div>
        <hr />
        <div className="sameLine">Case 1</div>
        <div> arr = ['a', 'a', 'c', 'b', 'a', 'b']</div>
        <hr />
        <div className="sameLine">Case 2</div>
        <div> arr = ['abc', 'abc', 'ca', 'ac', 'ca', 'xyb']</div>
      </div>
    );

    return retVal;
  }
}
