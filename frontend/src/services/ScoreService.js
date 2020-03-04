import axios from 'axios'

const url = "https://shrouded-chamber-27182.herokuapp.com/"

const getScores = () => {
    return axios.get(url + "/scores")
}

const saveScore = scoreToBeSaved => {
    return axios.post(url + "/scores", scoreToBeSaved)
}

export default {
    getScores:getScores,
    saveScore:saveScore
}