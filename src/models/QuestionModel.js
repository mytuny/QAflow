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
    let questions = localStorage.getItem('questions');
    if (!Array.isArray()) questions = [];
    questions.push(this);
    localStorage.setItem('questions', JSON.stringify(questions));
  }
}