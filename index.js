require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/dbconfig');
const app = express();
const teamRoute = require('./routes/teams/team.route.js');
const loginRoute = require('./routes/login/login.route.js');
const stackRoute = require('./routes/stacks/stack.route.js');
const upcomingChallengeRoute = require('./routes/upcomingChallenges/upcomingChallenges.route.js')
const PORT = process.env.PORT || 5000;

//database connection
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/hackathon/teams', teamRoute);
app.use('/hackathon/login', loginRoute);
app.use('/hackathon/stacks', stackRoute);
app.use('/hackathon/upcoming-challenge', upcomingChallengeRoute);

app.get('/', function (req, res){
    res.send('This is the default route')
})

app.listen(process.env.PORT, () => {
    console.log(`${PORT} connected.`);
});