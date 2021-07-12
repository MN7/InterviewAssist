import PropTypes from "prop-types";
import TestCases from "./TestCases";
import "../../styles.css";

const Question = ({ qNum, qTitle, qSourceCode, testCasesArr, questFunc }) => {
  const { pName, pType, pValue } = testCasesArr[0].inpParamsArr[0];
  let line1suffix = pName + ": ";
  line1suffix += pType === "array" ? "[" + pValue + "]" : pValue;
  const resultElt = (
    <div key={qNum} className="sameCol">
      <h4>
        Question {qNum} - {qTitle}
      </h4>
      <div>
        <pre>
          {qSourceCode.split("\n").map((ln, i) => (
            <code key={i}>
              {(i === 0 ? `${ln} ${line1suffix}` : ln) + "\n"}
            </code>
          ))}
        </pre>
      </div>
      <hr />
      <TestCases testCasesArr={testCasesArr} handleCalculate={questFunc} />
      <hr />
    </div>
  );
  return resultElt;
};

Question.propTypes = {
  qNum: PropTypes.string.isRequired,
  qTitle: PropTypes.string.isRequired,
  qSourceCode: PropTypes.string.isRequired,
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
  questFunc: PropTypes.func.isRequired,
};

export default Question;
