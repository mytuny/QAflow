import uuid from 'uuid';

export default class AnswerModel {
  constructor(questionId = "", answer = "") {
    this.id = uuid();
    this.qid = questionId;
    this.answerText = answer;
    this.createdAt = new Date();
    this.updatedAt = new Date();

    this.save = this.save.bind(this);
  }

  save() {
    let questions = JSON.parse(localStorage.getItem('questions'));
    if (!Array.isArray(questions)) questions = [];
    const answer = {
      id: this.id,
      qid: this.qid,
      answerText: this.answerText,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
    questions = questions.map(question => {
      if (question.id == answer.qid) {
        question.answers.push(answer);
      }
      return question;
    });
    localStorage.setItem('questions', JSON.stringify(questions));
  }
}