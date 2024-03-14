/* eslint-disable react/prop-types */
import { selectOption } from './selectOptionDOM'
const Option = ({ title, img, number }) => {
  return (
<<<<<<< HEAD
    <option
=======
    <div
>>>>>>> f0549d8d11f129e795d6563a392d32a2cf82bf2b
      className="option"
      onClick={(e) => {
        selectOption(e.target, number)
      }}
    >
<<<<<<< HEAD
      <img src={img} alt={`Path ${number} image`} className="img" />
      <h1 className="h1">{title}</h1>
    </option>
  )
}
export default Option
=======
      <img className="choose-img" src={img} alt={`Path ${number} image`} />
      <h1>{title}</h1>
    </div>
  );
};
export default Option;
>>>>>>> f0549d8d11f129e795d6563a392d32a2cf82bf2b
