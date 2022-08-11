import * as React from 'react'
import { Link } from "gatsby"
import {menuItems } from "../../components/Links"
import {CopyrightStyles, FooterMenuStyles, FooterStyles} from "./FooterStyle"



const Footer=()=>
{
    let $url="www.hoyrak.com";
    let $name="PJ Trowski"
    return(
    <FooterStyles style={{marginBottom:0}} className="section">
        <div className="container container__tight">
            <FooterMenuStyles className="footer__menu">
                <h5>Links</h5>
                <ul>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path} activeClassName="menu__item--active">
                                    {item.text}
                                    <span>.</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </FooterMenuStyles>
        </div>
        <CopyrightStyles>
            <div className="container container__tight">
                <p>
                    Designed & developed by{" "}
                    <a
                        href={$url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {$name}
                    </a>
                    <span>.</span>
                </p>
            </div>
        </CopyrightStyles>
    </FooterStyles>
)
}

export default Footer