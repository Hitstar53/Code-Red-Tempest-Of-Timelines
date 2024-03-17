import {base_url} from "../constants/index.js"
import axios from "axios"

const getLeaderboard = async () => {
    const response = await axios.get(`${base_url}/team/getLeaderboard`)
    const sortedTeams = response.data.teams;
    var teamsWithScore = sortedTeams.map((team) => {
        team.score = team.level_score.reduce((a, b) => a + b, 0);
        return team;
    });
    teamsWithScore.sort((a, b) => {
        if (a.currentLevel === b.currentLevel) {
            return b.score - a.score;
        }
        return b.currentLevel - a.currentLevel;
    });

    return teamsWithScore;
}

const getBoardLock = async () => {
    const response = await axios.get(`${base_url}/boardlock`)
    return response.data;
}

const setBoardLock = async () => {
    const response = await axios.post(`${base_url}/boardlock`)
    return response.data;
}

export {getLeaderboard,getBoardLock,setBoardLock}