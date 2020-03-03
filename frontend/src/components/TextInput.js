import React, { useState } from "react"
import styles from '../styles/styles.css'
const TextInput = props => {
    const [textInputValue, setTextInputValue] = useState('')
    const [scoreValue, setScoreValue] = useState('')
    const setTextInputValueHandler = event => {
        setTextInputValue(event.target.value)
        console.log(textInputValue)
    }
    const setScoreValueHandler = event => {
        setScoreValue(event.target.value)
        console.log(scoreValue)
    }
    const handleAdd = () => {
        props.handleAdd(textInputValue, scoreValue)
        setTextInputValue('');
        setScoreValue('')
    }
    return(
        <div className = "scoreboard-headline-wrapper">
            <input type="text" value={scoreValue} placeholder={props.scoreText} onChange = {setScoreValueHandler}></input>
            <input type="text" value={textInputValue} placeholder={props.inputText} onChange = {setTextInputValueHandler}></input>
            <button onClick = {handleAdd}>>></button>
        </div>
    )
}
export default TextInput