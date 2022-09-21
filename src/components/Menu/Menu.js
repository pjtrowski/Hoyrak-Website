import { slide as MenuStyle } from 'react-burger-menu'
import * as React from "react"

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

class Menu extends React.Component {


  render () {
    return (
      <MenuStyle class="mobileNav" right styles={ styles }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about/">About</a>
        <a id="contact" className="menu-item" href="/ourworr/">OurWork</a>
        <a id="contact" className="menu-item" href="/contact/">Contact</a>
      </MenuStyle>
    );
  }
}

export default Menu