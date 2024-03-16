import axios from 'axios'
import { base_url } from '../constants'
const getScore = async () => {
    const team = JSON.parse(localStorage.getItem('team'))
    try {
      const res = await axios.get(`${base_url}/team/getTeamScore/${team.id}`)
      console.log(res.data.score)
      return res.data.score
      
    } catch (error) {
      console.log(error)
      
    }
  
}

const getCurrentLevel = async () => {
    const team = JSON.parse(localStorage.getItem('team'))
    try {
      const res = await axios.get(`${base_url}/team/getCurrentLevel/${team.id}`)
      if (window.location.pathname !== `/levels/prelevel${res.data.level}` &&  window.location.pathname !== `/levels/level${res.data.level}`) {
        window.location.href = `/levels/prelevel${res.data.level}`
      }
    } catch (error) {
      console.log(error)
    }
}

const Level1Sol = async (answer,teamId) => {
    try {
      const id = teamId || JSON.parse(localStorage.getItem('team')).id
      const res = await axios.post(`${base_url}/solutions/level1`, {answer,id})
      return res.data.data
    } catch (error) {
      console.log(error)
    }
}

const updateLevel = async ()=>{
  const id = JSON.parse(localStorage.getItem('team')).id
  console.log(id)
  try {
    await axios.put(`${base_url}/team/updateLevelTime/${id}`).then((res) => {
      console.log("HIII")
      axios.put(`${base_url}/team/calculateLevelScore/${id}`).then((res) => {
        console.log(res)
      })
    })
    
  } catch (error) {
    console.log(error)
  }

}

export { getScore,Level1Sol,getCurrentLevel,updateLevel }


