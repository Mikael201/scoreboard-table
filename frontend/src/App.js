import React, {useState, useEffect} from 'react';
import ScoreBoard from './components/ScoreBoard';
import TextInput from './components/TextInput';
import ScoreService from './services/ScoreService';
import styles from './styles/styles.css'
const App = () => {
  const [scores, setScores] = useState([])
  useEffect(() => {
    ScoreService
      .getScores()
      .then(response => {
        console.log(response.data)
        setScores(response.data)
      })
  }, [])
  const showAllScores = () =>
    scores.map(score => 
      <ul key={score.id} className = "scoreboard-headline-wrapper">
        <b>Score:</b> {score.score}, <b>Name:</b> {score.name}
      </ul>
    )

    const handleScoreAdding = (name, score) => {
      //ScoreService.getScores()
      console.log("adding: " + name + score)
      const newScore = {
        name: name,
        score: score
      }
      ScoreService.saveScore(newScore)
        .then(data => {
          console.log(data)
          setScores(scores.concat(data.data).sort((a,b) => b.score - a.score))
        }).catch(e => console.log(e))
    }
  
  return(
    <div>
      <ScoreBoard 
        title = "Scoreboard table"
      />
      {showAllScores()}
      <TextInput 
        inputText = "Add name"
        scoreText = "Add score"
        handleAdd = {handleScoreAdding}
      />

    </div>
  )
}
export default App;
