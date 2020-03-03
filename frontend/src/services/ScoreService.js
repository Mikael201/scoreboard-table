import axios from 'axios'

const url = "http://localhost:8080"

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