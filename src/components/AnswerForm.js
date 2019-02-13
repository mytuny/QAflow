import React from 'react';
import AnswerModel from '../models/AnswerModel';

export default class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
  }

  handleAnswerSubmit(e) {
    e.preventDefault();
    const input = e.target.elements.answer.value;
    if (input) {
      let answer = new AnswerModel(this.props.question.id, input);
      answer.save();
      this.props.addNewAnswer(answer);
    }
    e.target.elements.answer.value = '';
  }

  render() {
    return (
      <form hidden={!this.props.question} onSubmit={this.handleAnswerSubmit}>
        <textarea name="answer"></textarea>
        <button type="submit">Submit Answer</button>
      </form>
    );
  }
}