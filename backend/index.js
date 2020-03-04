require('dotenv').config();
const Score = require('./score')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors())
app.use(bodyParser.json())

app.get('/scores', (request, response) => {
    Score.find({

    }).then(data => {
        data.sort((a,b) => b.score - a.score);
        response.json(data.map(oneScore => oneScore.toJSON()))
    }).catch(e => console.log(e))
})

app.post('/scores', (request, response) => {
    const body = request.body
    const score = new Score({
        name: body.name,
        score: body.score
    })
    score.save()
        .then(savedScore => {
            response.json(savedScore.toJSON())
        }).catch(e => console.log(e))
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})