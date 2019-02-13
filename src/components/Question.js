import React from 'react';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuestionClick = this.handleQuestionClick.bind(this);
  }

  handleQuestionClick() {
    this.props.showQuestion(this.props.question);
  }

  render() {
    return (
      <li onClick={this.handleQuestionClick}>
        <span>Votes: {this.props.question.votes.up - this.props.question.votes.down}</span> |
        <span>Answers: {this.props.question.answers.length}</span> |
        <span>Views: {this.props.question.views}</span> |
        <b>{this.props.question.questionTitle}</b>
      </li>
    );
  }
}