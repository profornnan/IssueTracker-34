const { getComments } = require('../controllers/comment.controller');
const commentModel = require('../models/comment.model');

const commentService = {
  async createComment({ userId, issueId, comment, date }) {
    const result = await commentModel.createComment({
      userId,
      issueId,
      comment,
      date,
    });

    if (result) {
      return result;
    }
    throw new Error('createComment failed');
  },
  async getComments({ issueId }) {
    const result = await commentModel.getComments({ issueId });

    if (result) {
      return result;
    }
    throw new Error();
  },
};

module.exports = commentService;
