import React from 'react';
import Answer from './Answer';

export default class AnswersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.question && this.props.question.answers.map(answer => <Answer key={answer.id} answer={answer} />)}
      </div>
    );
  }
}