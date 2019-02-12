import uuid from 'uuid';

export default class AnswerModel {
  constructor(answer = "") {
    this.id = uuid();
    this.answerText = answer;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}