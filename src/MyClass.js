import { Component } from "react";
import "./styles.css";
import { CodeQ0, Q001, Q002, Q003, Q004 } from "./Questions";

export default class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [<Q001 />, <Q002 />, <Q003 />, <Q004 />],
      chosenQ: -1
    };
  }

  render() {
    const { questions, chosenQ } = this.state;

    const retval = (
      <>
        <div className="sameCol">
          <h4>Understanding Code Snippets</h4>
          <div className="sameLine">
            {questions.map((q, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    this.setState({ chosenQ: i });
                  }}
                >
                  {"Question " + (i + 1)}
                </button>
              );
            })}
            {chosenQ !== -1 && (
              <button
                onClick={() => {
                  this.setState({ chosenQ: -1 });
                }}
              >
                Clear Question
              </button>
            )}
          </div>
          <hr />
          <h6>
            Please use pen/pencil, paper as needed for code-snippet questions
          </h6>
          <hr />
          {chosenQ !== -1 && questions[chosenQ]}
          <hr />
          <hr />
        </div>
        <div>
          <h4>Developing Code</h4>
          <CodeQ0 />
        </div>
      </>
    );
    return retval;
  }
}
