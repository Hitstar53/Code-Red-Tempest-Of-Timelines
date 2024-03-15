/* eslint-disable react/prop-types */
import { selectOption } from './selectOptionDOM';
import AppCSS from './App.module.css';
const Option = ({ title, img, number }) => {
  return (
    <div
      className={AppCSS.option}
      onClick={(e) => {
        selectOption(e.target, number);
      }}
    >
      <img
        className={AppCSS.chooseImg}
        src={img}
        alt={`Path ${number} image`}
      />
      <h1>{title}</h1>
    </div>
  );
};
export default Option;
