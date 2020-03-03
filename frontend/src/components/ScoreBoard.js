import React from 'react';
import styles from '../styles/styles.css'
const ScoreBoard = props => {
    return(
        <div className = "scoreboard-headline-wrapper">
            <div className = "scoreboard-text">{props.title}</div>
        </div>
    )
}
export default ScoreBoard