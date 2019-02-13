import React from 'react';

export default class Answer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.answer.answerText}</div>
    );
  }
}