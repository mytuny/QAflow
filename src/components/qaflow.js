import React from 'react';

import Questions from './Questions';
import Ask from './Ask';
import QuestionPage from './QuestionPage';

export default class QAFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      selectedQuestion: null,
      page: 0
    };
    this.addNewQuestion = this.addNewQuestion.bind(this);
    this.showQuestion = this.showQuestion.bind(this);
    this.updateState = this.updateState.bind(this);
    this.whatToDisplay = this.whatToDisplay.bind(this);
    this.returnBack = this.returnBack.bind(this);
    // Load Data
    const questionsData = localStorage.getItem('questions');
    if (questionsData) {
      this.state.questions = JSON.parse(questionsData);
    }
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

  showQuestion(question) {
    this.setState((state, props) => {
      return {
        selectedQuestion: question,
        page: 1
      };
    });
  }

  updateState() {
    this.setState((state, props) => {
      const questions = JSON.parse(localStorage.getItem('questions'));
      let selectedQuestion = state.selectedQuestion;
      const question = questions.find(q => q.id == selectedQuestion.id);
      selectedQuestion = question;
      return { questions, selectedQuestion };
    });
  }

  whatToDisplay(page) {
    if (page === 1) {
      return (
        <QuestionPage
          question={this.state.selectedQuestion}
          updateState={this.updateState}
          returnBack={this.returnBack}
        />
      );
    } else {
      return (
        <React.Fragment>
          <Ask addNewQuestion={this.addNewQuestion} />
          <Questions questions={this.state.questions} showQuestion={this.showQuestion} />
        </React.Fragment>
      );
    }
  }

  returnBack() {
    this.setState((state, props) => ({ page: 0 }));
  }

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <h1 className="header__title">QAflow</h1>
            <small className="header__subtitle">Shoot Your Questions!</small>
          </div>
        </header>
        <div className="container">
          {this.whatToDisplay(this.state.page)}
        </div>
      </div>
    );
  }
}