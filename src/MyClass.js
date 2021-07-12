import { Component, Fragment } from "react";
import "./styles.css";
import { CodeQ0, SnipQ0 } from "./Questions";
import {
  totalSnipQuestions,
  totalCodeQuestions,
} from "./Questions/questionData";

export default class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenQ: -1,
      chosenLang: "js",
    };
  }

  render() {
    const { chosenQ, chosenLang } = this.state;
    const codeQBgn = totalSnipQuestions;
    const totalQuestions = totalSnipQuestions + totalCodeQuestions;
    const clearQbtn = (
      <button
        className="qColBtns"
        onClick={() => {
          this.setState({ chosenQ: -1 });
        }}
      >
        Clear Question
      </button>
    );
    const flipLanguage = () => {
      this.setState({ chosenLang: chosenLang === "js" ? "ts" : "js" });
    };

    const retval = (
      <>
        <h2>
          Language preference:{" "}
          {chosenLang === "js" ? "JavaScript" : "TypeScript"}
        </h2>
        <h4>
          Use{" "}
          {
            <button className="tcButton" onClick={flipLanguage}>
              {chosenLang === "js" ? "TypeScript" : "JavaScript"}
            </button>
          }{" "}
          instead
        </h4>
        <div className="sameLine">
          <div className="sameCol widthQBox">
            <h4>Understanding Code Snippets</h4>
            {[...Array(totalQuestions).keys()].map((i) => (
              <Fragment key={i}>
                {i === codeQBgn && (
                  <>
                    {chosenQ !== -1 && chosenQ < codeQBgn && clearQbtn}
                    <h6 className="widthTipLine">
                      Please use pen/pencil, paper as needed for code-snippet
                      questions
                    </h6>
                    <h4>Developing Code</h4>
                  </>
                )}
                <button
                  className="qColBtns"
                  key={i}
                  onClick={() => {
                    this.setState({ chosenQ: i });
                  }}
                >
                  {"Question " + ((i >= codeQBgn ? i - codeQBgn : i) + 1)}
                </button>
              </Fragment>
            ))}
            {chosenQ !== -1 && chosenQ >= codeQBgn && clearQbtn}
          </div>
          {chosenQ !== -1 &&
            (chosenQ < codeQBgn ? (
              <SnipQ0 chosenQ={chosenQ} chosenLang={chosenLang} />
            ) : (
              <CodeQ0 chosenQ={chosenQ - codeQBgn} />
            ))}
        </div>
      </>
    );
    return retval;
  }
}
