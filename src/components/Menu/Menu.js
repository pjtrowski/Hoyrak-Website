import { slide as MenuStyle } from 'react-burger-menu'
import * as React from "react"
import {MenuLinks} from "./MenuLinks"
import {Link} from "gatsby"

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '30px',
      height: '24px',
      right: '36px',
      top: '16px',
      margin: '25px',
    
    },
    bmBurgerBars: {
      background: '#f8f8f8',
      height: '3px'
    },
    bmBurgerBarsHover: {
      background: '#ffffff'
    },
    bmCrossButton: {
        top: '24px',
        right: '24px',
      height: '28px',
      width: '28px'
    },
    bmCross: {
        height: '28px',
        background: '#fff'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: 'black',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'flex',
      flexDirection: 'columns',
      color: '#fff'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }
class Menu extends React.Component {

  render () {
    return (
      <MenuStyle class="mobileNav" right styles={ styles }>
    {MenuLinks.map((item, index) => (
            <li key={index}>
              <Link
                onClick={toggleNav}
                onKeyDown={toggleNav}
                to={item.path}
                activeClassName="menu__item--active"
              >
                {item.text}
                <span>.</span>
              </Link>
            </li>
          ))}
      </MenuStyle>
    );
  }
}

export default Menu