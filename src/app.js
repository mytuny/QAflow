import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './components/Questions';

import Ask from './components/Ask';
import QuestionPage from './components/QuestionPage';

import 'normalize.css/normalize.css';
import './styles/style.scss';

class QAFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      selectedQuestion: null
    };
    this.addNewQuestion = this.addNewQuestion.bind(this);
    this.showQuestion = this.showQuestion.bind(this);
    this.updateState = this.updateState.bind(this);
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

  updateState() {
    this.setState((state, props) => {
      const questions = JSON.parse(localStorage.getItem('questions'));
      let selectedQuestion = state.selectedQuestion;
      const question = questions.find(q => q.id == selectedQuestion.id);
      selectedQuestion = question;
      return { questions, selectedQuestion };
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
              <QuestionPage question={this.state.selectedQuestion} updateState={this.updateState} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

ReactDOM.render(<QAFlow />, document.getElementById('app'));