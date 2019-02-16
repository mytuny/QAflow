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
        <div className="questionPage__top-bar">
          <button className="btn-secondary" onClick={this.props.returnBack}>Return Back To Questions List</button>
        </div>
        <div className="questionPage__title">
          <div className="questionPage__vote">
            <div>{this.props.question && <button className="btn-vote" onClick={this.voteUp}>+1</button>}</div>
            <div className="questionPage__votesCount">{this.props.question && this.props.question.votes.up - this.props.question.votes.down}</div>
            <div>{this.props.question && <button className="btn-vote" onClick={this.voteDown}>-1</button>}</div>
          </div>
          <div className="questionPage__title-right">
            <h2>{this.props.question && this.props.question.questionTitle}</h2>
          </div>
        </div>
        <div>
          <p>{this.props.question && this.props.question.questionText}</p>
        </div>
        <AnswersList question={this.props.question} updateState={this.props.updateState} />
        <AnswerForm question={this.props.question} addNewAnswer={this.addNewAnswer} />
      </div>
    );
  }
}