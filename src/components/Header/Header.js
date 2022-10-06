import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "../Menu/Menu"
import { HeaderStyle } from "./HeaderStyle"
import { HoyrakLogo } from "../../images/images"

const Header=({siteTitle})=>{
  return(
    <HeaderStyle>
    <header className="container">
    <div>
    
    <a aria-current="page" className="hoyrak_name" >HOYRAK<span style={{ color: "var(--primary)" }}>.</span></a>
    </div>

  <Menu/>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}>
    </div>
    
  </header>
  </HeaderStyle>
  )

}
export default Header
