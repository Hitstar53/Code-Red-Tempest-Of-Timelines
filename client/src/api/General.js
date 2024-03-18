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
      if (window.location.pathname !== `/levels/prelevel${res.data.level}` &&  window.location.pathname !== `/levels/level${res.data.level}` && window.location.pathname !== `/levels/level${res.data.level}b` && window.location.pathname!==`/levels/level${res.data.level}_1` && window.location.pathname !== `/levels/level${res.data.level}a` && window.location.pathname !== `/levels/level${res.data.level}-1` && window.location.pathname !== `/levels/level${res.data.level}-2` ) {
        if (res.data.level ==3|| res.data.level ==  4 || res.data.level == 6 || res.data.level == 8){
          window.location.href = `/levels/prelevel${res.data.level}-1`

        }else{

          window.location.href = `/levels/prelevel${res.data.level}`
        }
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

const Level2Sol = async (coordinates,year) => {
    try {
      const res = await axios.post(`${base_url}/solutions/level2`, {coordinates,year})
      return res.data.data
    } catch (error) {
      console.log(error)
    }

}

const Level3_1Sol = async (answer) => {
    try {
      const res = await axios.post(`${base_url}/solutions/level3_1`, {answer})
      console.log(res.data.data)
      return res.data.data
    } catch (error) {
      console.log(error)
    }
}

const Level4aSol = async (answer) => {
  try {
    // remove the space and convert to uppercase
    const ans = answer.replace(/\s/g, '').toUpperCase()
    const res = await axios.post(`${base_url}/solutions/level4a`, {answer:ans})

    return res.data.data
    
  } catch (error) {
    console.log(error)
    
  }
}

const Level5Sol = async (timePeriod,destination) => {
  try {
    const res = await axios.post(`${base_url}/solutions/level5`, {timePeriod,destination})
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
      axios.put(`${base_url}/team/calculateLevelScore/${id}`).then((res) => {
        console.log(res)
      })
    })
    
  } catch (error) {
    console.log(error)
  }

}

const checkisLooped = async () => {
  const team = JSON.parse(localStorage.getItem('team'))
  try {
    const res = await axios.get(`${base_url}/team/getIsLooped/${team.id}`)
    return res.data.looped
  } catch (error) {
    console.log(error)
  }
}

const incrementLevel = async () => {
  const id = JSON.parse(localStorage.getItem('team')).id
  try {
    await axios.put(`${base_url}/team/incrementLevel/${id}`)
  } catch (error) {
    console.log(error)
  }
}

const Level7Sol = async (answer) => {
  try {
    const res = await axios.post(`${base_url}/solutions/level7`, {answer})
    return res.data.data
  } catch (error) {
    console.log(error)
  }

}

const Level8_1Sol = async (answer) => {
  try {
    const res = await axios.post(`${base_url}/solutions/level8_1`, {answer})
    return res.data.data
  } catch (error) {
    console.log(error)
  }



}


const setLooped = async () => {
  const id = JSON.parse(localStorage.getItem('team')).id
  try {
    await axios.post(`${base_url}/solutions/setlooped`, {id})
  } catch (error) {
    console.log(error)
  }

}

const Level3_2Sol = async (answer) => {
  var ans = answer.toLowerCase()
  const res = await axios.post(`${base_url}/solutions/level3_2`, {answer:ans})
  return res.data.data
}

const Level6aSol = async (answer) => {
  const res = await axios.post(`${base_url}/solutions/level6a`, {answer})
  return res.data.data
}



export { getScore,Level1Sol,getCurrentLevel,updateLevel,checkisLooped,Level2Sol,incrementLevel,Level3_1Sol,Level4aSol,Level5Sol,Level8_1Sol,Level7Sol,setLooped,Level3_2Sol,Level6aSol }


