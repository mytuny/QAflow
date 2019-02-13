import uuid from 'uuid';

export default class QuestionModel {
  constructor(title = "", text = "") {
    this.id = uuid();
    this.questionTitle = title;
    this.questionText = text;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.acceptedAnswer = null;
    this.votes = {
      up: 0,
      down: 0
    };
    this.views = 0;
    this.answers = [];
  }

  save() {
    let questions = JSON.parse(localStorage.getItem('questions'));
    if (!Array.isArray(questions)) questions = [];
    const question = {
      id: this.id,
      questionTitle: this.questionTitle,
      questionText: this.questionText,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      acceptedAnswer: this.acceptedAnswer,
      votes: this.votes,
      views: this.views,
      answers: this.answers
    };
    questions.push(question);
    localStorage.setItem('questions', JSON.stringify(questions));
  }
}