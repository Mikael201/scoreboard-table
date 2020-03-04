import axios from 'axios'

const url = '/scores'

const getScores = () => {
    return axios.get(url)
}

const saveScore = scoreToBeSaved => {
    return axios.post(url, scoreToBeSaved)
}

export default {
    getScores:getScores,
    saveScore:saveScore
}