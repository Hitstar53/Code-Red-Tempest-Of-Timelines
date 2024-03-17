import React,{useState} from 'react'
import * as XLSX from 'xlsx';
import axios from 'axios';
import { base_url } from '../constants';

const Bulk_Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!selectedFile) {
        alert('Please select a file first!');
        return;
      }
  
      const data = await selectedFile.arrayBuffer();
      const workbook = XLSX.read(data);
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);

      const res1 = await axios.get(`${base_url}/team/getNoOfTeams`);
      const noOfTeams = res1.data.noOfTeams;
  
      const formattedData = json.reduce((acc, row) => {
        const name = row['Team Code Name in the Quest'] || row['Code Name for you in this Quest?'];
  
        if (!name) {
          return acc;
        }
  
        var teamMembers = [row['Name']]; 
        if (row['Name of Team Member 2']) {
          teamMembers.push(row['Name of Team Member 2']);
        }
  // push id as row no
        acc.push({
          id: noOfTeams + acc.length + 1,
          name,
          teamLeaderName: row['Name'],
          teamMembers,
        });
  
        return acc;
      }, []);
  
      console.log(formattedData);
      const payload = {
        teams: formattedData,
      }
      const res = await axios.post(`${base_url}/team/uploadTeamsBulk`, payload);
      console.log(res)
      setSelectedFile(null);
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">File Upload</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fileInput" className="block text-gray-700 font-bold mb-2">
            Choose file
          </label>
          <input
            type="file"
            id="fileInput"
            className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent"
            onChange={handleFileChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Bulk_Upload