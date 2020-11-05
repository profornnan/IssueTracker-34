const express = require('express');
const router = express.Router();
const labelController = require('../controllers/label.controller');
const { validateCreateLabelInput } = require('../middleware/validateInputs');

router.post('/', validateCreateLabelInput, labelController.createLabel);
router.delete('/', labelController.deleteLabel);

module.exports = router;
