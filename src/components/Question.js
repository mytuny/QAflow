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
        {this.props.question.questionTitle}
      </li>
    );
  }
}