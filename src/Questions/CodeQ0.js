import PropTypes from "prop-types";
import "../styles.css";
import { codeQarray } from "./questionData";

const CodeQ0 = ({ chosenQ }) => {
  const retVal = (
    <div className="sameCol">
      {codeQarray
        .filter((cq) => cq.idx === chosenQ)
        .map((cq, i) => {
          return (
            <div key={i}>
              <h4>{cq.title}</h4>
              <p>
                {cq.text} {cq.urls && cq.urls.map((x) => x)}
              </p>
              {cq.testCases.map((tc, j) => {
                return (
                  <div key={i * 100 + j}>
                    <p>Test Case {tc.caseNum + 1}</p>
                    <p>{tc.inpEltName}: </p>
                    <code>{tc.inpEltValue}</code>
                    <p>Expected output:</p>
                    <code>
                      {tc.outEltValue.split("$").map((v, k) => (
                        <span key={k}>{v}</span>
                      ))}
                    </code>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
  return retVal;
};

CodeQ0.propTypes = {
  chosenQ: PropTypes.number.isRequired,
};

export default CodeQ0;
