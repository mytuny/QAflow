import React from 'react';

export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        *****
        <h2>{this.props.question && this.props.question.questionTitle}</h2>
        <div>
          <p>{this.props.question && this.props.question.questionText}</p>
        </div>
      </div>
    );
  }
}