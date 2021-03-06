const issueModel = require('../models/issue.model');

const issueService = {
  async getIssues() {
    const issues = await issueModel.getIssues();

    if (issues) {
      return issues;
    }
    throw new Error();
  },
};

module.exports = issueService;
