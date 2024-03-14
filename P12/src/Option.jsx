/* eslint-disable react/prop-types */
import { selectOption } from './selectOptionDOM'
const Option = ({ title, img, number }) => {
  return (
    <option
      className="option"
      onClick={(e) => {
        selectOption(e.target, number)
      }}
    >
      <img src={img} alt={`Path ${number} image`} className="img" />
      <h1 className="h1">{title}</h1>
    </option>
  )
}
export default Option
