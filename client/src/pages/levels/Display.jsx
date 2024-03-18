import { useCustomization, wireColors } from "../../contexts/Customization";
import { useNavigate } from "react-router-dom";
import {updateLevel,checkisLooped,incrementLevel } from "../../api/General.js"
import { useState } from "react";

const Display = () => {
    const { password, wire1Color, wire2Color, wire3Color, sideWire } = useCustomization();
    const navigate = useNavigate();
    const [isReached,setIsReached] = useState(false)
    async function handleDefuse(e) {
        // const isDate = new Date().getDate() === 14 && new Date().getMonth() === 7 && new Date().getFullYear() === 1789;
        if (password.join('') === '1769' && !sideWire && wire1Color.name === 'blue' && wire2Color.name === 'white' && wire3Color.name === 'red' && !isReached) {
            setIsReached(true)
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('errorMessage').style.display = 'none';
            
            if (await checkisLooped()) {
                await incrementLevel()
                setTimeout(() => {
                    navigate('/levels/prebackstory');
                }, 2000);
              }
              else{
                await updateLevel()
                setTimeout(() => {
                    navigate('/levels/prebackstory');
                }, 2000);
              }
        }
        else {
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        }
    }

    return (
        <div className="digitalDisplay" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'Orbitron' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px',
                padding: '0 10px', // Add padding for space before and after the numbers
                backgroundColor: 'lightgreen',
                border: '5px solid #333',
                boxShadow: '0 0 10px lightgreen',
                borderRadius: '5px',
                fontSize: '2em'
            }}>
                {password.join(' ')}
            </div>
            <button style={{
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                boxShadow: '0 0 10px lightblue',
                border: '5px solid #03D8F3',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '20px'
            }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = 'darkblue' }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = 'blue' }}
                onClick={handleDefuse}>
                Defuse
            </button>
            <div id="successMessage" style={{ display: 'none',fontSize: '18px', marginTop: '20px', color: 'green', fontWeight: 'bolder', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                Bomb Defused!
            </div>
            <div id="errorMessage" style={{ display: 'none',fontSize: '18px', marginTop: '20px', color: 'red', fontWeight: 'bolder', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                Bomb Not Defused !
            </div>
        </div>
    );
}

export default Display;