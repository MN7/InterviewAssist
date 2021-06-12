import { Component } from "react";
import "../styles.css";

export default class CodeQ0 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenQ: -1,
      codeqs: [
        {
          idx: 0,
          text:
            "Given an array of strings, generate an object with keys as unique strings in the array & values as number of times the key has occurred in the array.",
          testCases: [
            {
              caseNum: 0,
              inpEltName: "InputArray",
              inpEltValue: "[ 'a', 'a', 'd', 'b', 'd', 'c', 'a', 'b']",
              outEltValue: "{'a' : 3, 'b' : 2, 'd' : 2 ,'c' : 1}"
            },
            {
              caseNum: 1,
              inpEltName: "InputArray",
              inpEltValue:
                "[ 'abc', 'adcb', 'aa', 'abc', 'ad', 'abc', 'aa', 'ba', 'aa', 'aa', 'adcb' ]",
              outEltValue: "{ aa : 4, abc : 3, ad : 1, adcb : 2, ba : 1 }"
            }
          ]
        },
        {
          idx: 1,
          text:
            "Given a paragraph (ie, string), generate a map (ie, key-value pair) where key is length (integer) and value is an array of words (in paragraph) where length = key.",
          testCases: [
            {
              caseNum: 0,
              inpEltName: "InputString",
              inpEltValue: "'Two plus two equals four'",
              outEltValue: `{ $
              3: ['Two', 'two'], $
              4: ['plus', 'four'], $
              6: ['equals'] $
        }`
            },
            {
              caseNum: 1,
              inpEltName: "InputString",
              inpEltValue:
                "'This paragraph is not very long as it comprises only of one sentence'",
              outEltValue: `{ $
          2 : ['is', 'as', 'it', 'of'], $
          3 : ['not', 'one'], $
          4 : ['This', 'very', 'long', 'only'], $
          8 : ['sentence'], $
          9 : ['paragraph', 'comprises'] $
         }`
            }
          ]
        }
      ]
    };
  }

  handleClick = (a) => {
    this.setState({});
  };

  render() {
    const { codeqs, chosenQ } = this.state;
    const retVal = (
      <>
        <div className="sameLine">
          {codeqs.map((cq, i) => (
            <button
              key={i}
              onClick={() => {
                this.setState({ chosenQ: i });
              }}
            >
              {"Question " + (i + 1)}
            </button>
          ))}
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
        <div className="sameCol">
          {chosenQ !== -1 &&
            codeqs
              .filter((cq) => cq.idx === chosenQ)
              .map((cq, i) => {
                return (
                  <div key={i}>
                    <p>{cq.text}</p>
                    {cq.testCases.map((tc) => {
                      return (
                        <div>
                          <p>Test Case {tc.caseNum + 1}</p>
                          <p>{tc.inpEltName}: </p>
                          <code>{tc.inpEltValue}</code>
                          <p>Expected output:</p>
                          <code>
                            {tc.outEltValue.split("$").map((v) => (
                              <span>{v}</span>
                            ))}
                          </code>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
        </div>
      </>
    );
    return retVal;
  }
}
