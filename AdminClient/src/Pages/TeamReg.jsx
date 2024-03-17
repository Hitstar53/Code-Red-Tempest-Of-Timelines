import React,{useState} from 'react'
import axios from 'axios'
import { base_url } from '../constants'

const TeamReg = () => {
    const [teamName, setTeamName] = useState('')
    const [teamLeaderName, setTeamLeaderName] = useState('')
    const [teamMembers, setTeamMembers] = useState([])
    const [agentName, setAgentName] = useState('')

    const handleAddMember = () => {
        setTeamMembers([...teamMembers, '']);
      };
    
    const handleMemberChange = (index, value) => {
        const updatedMembers = [...teamMembers];
        updatedMembers[index] = value;
        setTeamMembers(updatedMembers);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: teamName,
            teamLeaderName:teamLeaderName,
            teamMembers:teamMembers,
            agentName:agentName
        }
        try {
            const res = await axios.post(`${base_url}/team/createTeam`,data)
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
        

    };
  return (
    <>
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Team Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="teamName" className="block text-gray-700 font-bold mb-2">Team Name</label>
          <input
            type="text"
            id="teamName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="teamLeader" className="block text-gray-700 font-bold mb-2">Team Leader</label>
          <input
            type="text"
            id="teamLeader"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            value={teamLeaderName}
            onChange={(e) => setTeamLeaderName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="teamLeader" className="block text-gray-700 font-bold mb-2">Agent Name</label>
          <input
            type="text"
            id="agentName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            value={agentName}
            onChange={(e) => setAgentName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="teamMembers" className="block text-gray-700 font-bold mb-2">Team Members</label>
          {teamMembers.map((member, index) => (
            <input
              key={index}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-indigo-500"
              value={member}
              onChange={(e) => handleMemberChange(index, e.target.value)}
              required
            />
          ))}
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleAddMember}
          >
            Add Member
          </button>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default TeamReg