import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './components/Questions';

import Ask from './components/Ask';

class QAFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        "How to fix CSS in wordpress after transfer it from localhost?",
        "Text Cutting inside Large Select Option Dropdown"
      ]
    };
    this.addNewQuestion = this.addNewQuestion.bind(this);
  }

  addNewQuestion(question) {
    this.setState((state, props) => {
      let questions = state.questions;
      questions.push(question);
      return {
        questions: questions
      };
    });
  }

  render() {
    return (
      <div>
        <h1>QAflow</h1><small>Shoot Your Question!</small>
        <Ask addNewQuestion={this.addNewQuestion} />
        <Questions questions={this.state.questions} />
      </div>
    );
  }
}

ReactDOM.render(<QAFlow />, document.getElementById('app'));