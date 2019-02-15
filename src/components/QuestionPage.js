import React from 'react';
import AnswerForm from './AnswerForm';
import AnswersList from './AnswersList';

export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.addNewAnswer = this.addNewAnswer.bind(this);
    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }

  addNewAnswer(answer) {
    this.props.updateState();
  }

  voteUp() {
    let questions = JSON.parse(localStorage.getItem('questions'));
    questions.map(question => {
      if (question.id == this.props.question.id) {
        question.votes.up++;
      }
      return question;
    });
    localStorage.setItem('questions', JSON.stringify(questions));
    this.props.updateState();
  }

  voteDown() {
    let questions = JSON.parse(localStorage.getItem('questions'));
    questions.map(question => {
      if (question.id == this.props.question.id) {
        question.votes.down++;
      }
      return question;
    });
    localStorage.setItem('questions', JSON.stringify(questions));
    this.props.updateState();
  }

  render() {
    return (
      <div>
        <h2>
          {this.props.question && <button onClick={this.voteUp}>+1</button>}
          {this.props.question && <b>{this.props.question.votes.up - this.props.question.votes.down}</b>}
          {this.props.question && <button onClick={this.voteDown}>-1</button>}
          {this.props.question && this.props.question.questionTitle}
        </h2>
        <div>
          <p>{this.props.question && this.props.question.questionText}</p>
        </div>
        <AnswersList question={this.props.question} updateState={this.props.updateState} />
        <AnswerForm question={this.props.question} addNewAnswer={this.addNewAnswer} />
      </div>
    );
  }
}