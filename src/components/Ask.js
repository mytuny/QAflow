import React from 'react';
import QuestionModel from '../models/QuestionModel';

export default class Ask extends React.Component {
  constructor(props) {
    super(props);
    this.handleAskFormSubmit = this.handleAskFormSubmit.bind(this);
  }

  handleAskFormSubmit(e) {
    e.preventDefault();
    const title = e.target.elements.askTitle.value;
    const text = e.target.elements.askText.value;
    if (title && text) {
      const question = new QuestionModel(title, text);
      question.save();
      this.props.addNewQuestion(question);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAskFormSubmit}>
        <input className="m-input" type="text" name="askTitle" />
        <textarea className="m-textarea" name="askText"></textarea>
        <button type="submit">Ask</button>
      </form>
    );
  }
}