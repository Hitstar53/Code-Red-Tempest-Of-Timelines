/* eslint-disable react/prop-types */
import { selectOption } from './selectOptionDOM'
const Option = ({ title, img, number }) => {
  return (
    <div
      className="option"
      onClick={(e) => {
        selectOption(e.target, number)
      }}
    >
      <img className="choose-img" src={img} alt={`Path ${number} image`} />
      <h1>{title}</h1>
    </div>
  );
};
export default Option;
