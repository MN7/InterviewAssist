import { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "../../styles.css";

class TestCases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cAnswers: [],
      uAnswers: [],
      btnText: { false: "Clear", true: "Calculate" },
    };
  }

  handleClick = (inpParamsArr, idx, handleCalculate) => {
    const { cAnswers, uAnswers } = this.state;
    cAnswers[idx] =
      cAnswers[idx].length === 0
        ? handleCalculate(inpParamsArr).toString()
        : "";
    if (cAnswers[idx].length === 0) uAnswers[idx] = "";
    this.setState({ cAnswers, uAnswers });
  };

  render() {
    const { cAnswers, uAnswers, btnText } = this.state;
    const { testCasesArr, handleCalculate } = this.props;
    testCasesArr.forEach((el) => {
      cAnswers.push("");
      uAnswers.push("");
    });
    const testCaseElt = (
      idx,
      inpParamsArr,
      handleCalculate,
      cAnswer,
      uAnswer // {pName} = {pValue.toString()}
    ) => (
      <Fragment key={idx}>
        <div key={idx} className="sameLine">
          Case {idx + 1}:{" "}
          {inpParamsArr
            .reduce(
              (fin, itm) =>
                (fin += itm.pName + " = " + JSON.stringify(itm.pValue) + ", "),
              ""
            )
            .slice(0, -2)}{" "}
          &emsp; Your answer:
          <input
            value={uAnswer}
            onChange={(e) => {
              uAnswers[idx] = e.target.value;
              this.setState({ uAnswers });
            }}
          />
          <button
            className="tcButton"
            disabled={uAnswers[idx].length === 0}
            onClick={() => {
              this.handleClick(inpParamsArr, idx, handleCalculate);
            }}
          >
            {btnText[cAnswer.length === 0]}
          </button>
          &emsp;
          {!!cAnswer && (
            <label className={cAnswer === uAnswer ? "goodjob" : ""}>
              Computed answer:&emsp;{cAnswer}{" "}
              {cAnswer === uAnswer && "-- Correct answer!"}
            </label>
          )}
        </div>
        <hr />
      </Fragment>
    );
    const resultElt = (
      <>
        {testCasesArr.map((tc) =>
          testCaseElt(
            tc.idx,
            tc.inpParamsArr,
            handleCalculate,
            cAnswers[tc.idx],
            uAnswers[tc.idx]
          )
        )}
      </>
    );
    return resultElt;
  }
}

TestCases.propTypes = {
  testCasesArr: PropTypes.arrayOf(
    PropTypes.shape({
      idx: PropTypes.number,
      inpParamsArr: PropTypes.arrayOf(
        PropTypes.shape({
          pName: PropTypes.string,
          pValue: PropTypes.any,
          pType: PropTypes.oneOf(["number", "string", "array", undefined]),
        })
      ).isRequired,
    })
  ),
  handleCalculate: PropTypes.func.isRequired,
};

export default TestCases;
