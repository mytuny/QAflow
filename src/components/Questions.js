import React from "react";
import Question from "./Question";

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Questions</h4>
        <ol>
        {
          this.props.questions.map(question => <Question key={question} question={question} />)
        }
        </ol>
      </div>
    );
  }
}