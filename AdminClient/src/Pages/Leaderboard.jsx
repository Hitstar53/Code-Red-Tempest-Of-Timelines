import React,{useState,useEffect} from 'react'
import axios from 'axios'; 
import { base_url } from '../constants'; 

const Leaderboard = () => {
    const [sortedTeams, setSortedTeams] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await axios.get(`${base_url}/team/getLeaderboard`);
                console.log(response.data.teams);
                var teamsWithScore = response.data.teams.map((team) => {
                    team.score = team.level_score.reduce((a, b) => a + b, 0);
                    return team;
                });
                teamsWithScore.sort((a, b) => {
                    if (a.currentLevel === b.currentLevel) {
                        return b.score - a.score;
                    }
                    return b.currentLevel - a.currentLevel;
                });
                console.log(teamsWithScore);
                setSortedTeams(teamsWithScore);
            } catch (error) {
                console.log(error);
            }
        };
        fetchLeaderboard();

        
    }, []);

      return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Team Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Current Level
                </th>
                <th scope="col" className="py-3 px-6">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedTeams.map((team, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {team.name}
                  </th>
                  <td className="py-4 px-6">
                    {team.currentLevel}
                  </td>
                  <td className="py-4 px-6">
                    {team.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}

export default Leaderboard