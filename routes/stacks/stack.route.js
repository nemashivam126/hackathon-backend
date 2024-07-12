const express =  require('express');
const router = express.Router();
const Stack = require('../../models/stacks/stack.model.js');
const { getStacks, createStack } = require('../../controllers/stacks/stack.controller.js');

router.get('/', getStacks)
router.post('/', createStack)

module.exports = router;