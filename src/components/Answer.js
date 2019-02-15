import React from 'react';

export default class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
    this.setAccepted = this.setAccepted.bind(this);
    this.isAccepted = this.isAccepted.bind(this);
    this.isAcceptable = this.isAcceptable.bind(this);
  }

  voteUp() {
    let questions = JSON.parse(localStorage.getItem('questions'));
    questions.map(question => {
      if (question.id == this.props.answer.qid) {
        question.answers.map(answer => {
          if (answer.id == this.props.answer.id) {
            answer.votes.up++
          }
          return answer;
        });
      }
      return question;
    });
    localStorage.setItem('questions', JSON.stringify(questions));
    this.props.updateState();
  }

  voteDown() {
    let questions = JSON.parse(localStorage.getItem('questions'));
    questions.map(question => {
      if (question.id == this.props.answer.qid) {
        question.answers.map(answer => {
          if (answer.id == this.props.answer.id) {
            answer.votes.down++
          }
          return answer;
        });
      }
      return question;
    });
    localStorage.setItem('questions', JSON.stringify(questions));
    this.props.updateState();
  }

  setAccepted() {
    let questions = JSON.parse(localStorage.getItem('questions'));
    questions.map(question => {
      if (question.id == this.props.answer.qid) {
        question.acceptedAnswer = this.props.answer.id;
      }
      return question;
    });
    localStorage.setItem('questions', JSON.stringify(questions));
    this.props.updateState();
  }

  isAccepted() {
    let questions = JSON.parse(localStorage.getItem('questions'));
    const question = questions.find(q => q.id == this.props.answer.qid);
    if (question.acceptedAnswer == this.props.answer.id) return true;
    return false;
  }

  isAcceptable() {
    let questions = JSON.parse(localStorage.getItem('questions'));
    const question = questions.find(q => q.id == this.props.answer.qid);
    if (question.acceptedAnswer === null) return true;
    return false;
  }

  render() {
    return (
      <div>
        <button onClick={this.voteUp}>+1</button>
        <b>{this.props.answer.votes.up - this.props.answer.votes.down}</b>
        <button onClick={this.voteDown}>-1</button>
        {this.props.answer.answerText}
        {this.isAccepted() && <span>ACCEPTED</span>}
        {this.isAcceptable() && <button onClick={this.setAccepted}>Accept</button>}
      </div>
    );
  }
}