import React from 'react';
import AnswerForm from './AnswerForm';
import AnswersList from './AnswersList';

export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.addNewAnswer = this.addNewAnswer.bind(this);
  }

  addNewAnswer(answer) {
    this.props.updateState();
  }

  render() {
    return (
      <div>
        *****
        <h2>{this.props.question && this.props.question.questionTitle}</h2>
        <div>
          <p>{this.props.question && this.props.question.questionText}</p>
        </div>
        *****
        <AnswersList question={this.props.question} />
        <AnswerForm question={this.props.question} addNewAnswer={this.addNewAnswer} />
      </div>
    );
  }
}