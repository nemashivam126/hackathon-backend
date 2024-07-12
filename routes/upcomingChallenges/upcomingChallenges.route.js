const express = require('express');
const router = express.Router();
const { getChallenges, createChallenge } = require('../../controllers/upcomingChallenges/upcomingChallenges.controller.js');

router.get('/', getChallenges);
router.post('/', createChallenge);

module.exports = router;