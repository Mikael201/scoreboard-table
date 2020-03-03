import React, {useState, useEffect} from 'react';
import ScoreBoard from './components/ScoreBoard';
import TextInput from './components/TextInput';
import ScoreService from './services/ScoreService';
const App = () => {
  const [scores, setScores] = useState([])
  useEffect(() => {
    ScoreService
      .getScores()
      .then(response => {
        setScores(response.data)
      })
  }, [])
  const handleScoreAdding = (name, score) => {
    //ScoreService.getScores()
    console.log("adding: " + name + score)
    const newScore = {
      name: name,
      score: score
    }
    ScoreService.saveScore(newScore)
  }
  const showAllScores = () => 
    scores.map(score => 
      <ul>
        <li>{score.score, score.name}</li>
      </ul>
    )
  
  return(
    <div>
      <ScoreBoard 
        title = "Scoreboard table"
      />
      {showAllScores}
      <TextInput 
        inputText = "Add name"
        scoreText = "Add score"
        handleAdd = {handleScoreAdding}
      />

    </div>
  )
}
export default App;
