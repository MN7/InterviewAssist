import "../styles.css";
import PropTypes from "prop-types";
import Question from "./components/Question";
import { snipQarray } from "./questionData";

const SnipQ0 = ({ chosenQ, chosenLang }) => {
  const retVal = snipQarray
    .filter((q, i) => i === chosenQ)
    .map((q) => (
      <Question
        key={q.idx}
        qNum={(q.idx + 1).toString()}
        qTitle={q.title}
        qSourceCode={chosenLang === "js" ? q.sourceCode : q.sourceCodeTS}
        testCasesArr={q.testCasesArr}
        questFunc={q.questFunc}
      />
    ));

  return retVal;
};

SnipQ0.propTypes = {
  chosenQ: PropTypes.number.isRequired,
  chosenLang: PropTypes.string.isRequired,
};

export default SnipQ0;
