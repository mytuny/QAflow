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
        <ul className="questions__list">
          {
            this.props.questions.map((question, index) =>
              <Question
                key={index}
                question={question}
                showQuestion={this.props.showQuestion}
              />
            )
          }
        </ul>
      </div>
    );
  }
}