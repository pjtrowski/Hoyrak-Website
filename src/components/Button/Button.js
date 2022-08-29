import * as React from "react"
import { MdArrowForward as Arrow} from "node_modules\react-icons\md"
//import { MdArrowForward as Arrow } from "react-icons/md"
import { ButtonStyle } from "./ButtonStyle"

const Button = ({ text, to, as, arrow }) => {
  return (
    <ButtonStyle className="btn" as={as} to={to}>
      {text}
      {arrow || to ?
        <Arrow style={{ marginLeft: "10px" }} />
       : null }
    </ButtonStyle>
  )
}

export default Button
