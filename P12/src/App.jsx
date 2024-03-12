import './App.css';
import Option from './Option.jsx';
import options from './options';
import { getSelectedOption } from './selectOptionDOM.js';

function redirect() {
  const selectedOption = getSelectedOption();
  if (selectedOption != null) {
    if (selectedOption == 0) {
      //help TPA path redirect
      console.log('Selected path 1');
    } else if (selectedOption == 1) {
      //help Andwyn path redirect
      console.log('Selected path 2');
    }
  }
}
function App() {
  return (
    <>
      <h1>Choose your path</h1>
      <section className="options">
        {options.map((option, index) => {
          return <Option key={option.id} {...option} number={index} />;
        })}
      </section>
      <button onClick={redirect} className="continue disabled">
        Continue
      </button>
    </>
  );
}

export default App;
