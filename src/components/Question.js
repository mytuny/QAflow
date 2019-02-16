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
        <div className="questions__leftStats">
          <div className="questions__leftStats-item">
            <span>{this.props.question.votes.up - this.props.question.votes.down}</span>
            <span>votes</span>
          </div>
          <div className="questions__leftStats-item">
            <span>{this.props.question.answers.length}</span>
            <span>answers</span>
          </div>
        </div>
        <div className="questions__rightText">
          <h4>{this.props.question.questionTitle}</h4>
        </div>
      </li>
    );
  }
}