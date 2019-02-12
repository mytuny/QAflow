import React from 'react';

export default class Ask extends React.Component {
  constructor(props) {
    super(props);
    this.handleAskFormSubmit = this.handleAskFormSubmit.bind();
  }

  handleAskFormSubmit(e) {
    e.preventDefault();
    const question = e.target.elements.ask.value;
    if (question) {
      alert(question);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAskFormSubmit}>
        <input type="text" name="ask" />
        <button type="submit">Ask</button>
      </form>
    );
  }
}