import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './components/Questions';

import Ask from './components/Ask';
import QuestionPage from './components/QuestionPage';

class QAFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      selectedQuestion: null
    };
    this.addNewQuestion = this.addNewQuestion.bind(this);
    this.showQuestion = this.showQuestion.bind(this);
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
        selectedQuestion: question
      };
    });
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h1>QAflow</h1><small>Shoot Your Question!</small>
              <Ask addNewQuestion={this.addNewQuestion} />
              <Questions questions={this.state.questions} showQuestion={this.showQuestion} />
            </td>
            <td>
              <QuestionPage question={this.state.selectedQuestion} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

ReactDOM.render(<QAFlow />, document.getElementById('app'));