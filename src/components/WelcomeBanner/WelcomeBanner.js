import * as React from "react"
import { Link, navigate } from "gatsby"
import {WelcomeBannerStyle} from "./WelcomeBannerStyle"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button"

const WelcomeBanner = ({ children, title, subTitle, price, enquire }) => {
  function scrollToArea() {
    navigate("#topContent")
  }

  return (
    <>
      <WelcomeBannerStyle>
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="C:\Users\pj.trowski\Documents\GitHub\Hoyrak-Website\src\images\hoyrak_welcome.jpg"
            alt="Banner Image"
            layout="fullWidth"
            placeholder="blurred"
            style={{
                opacity:0.3
            }}
          />
       

        <div className="container">
          <div className="banner__content">
            {title && (
              <h1>
                {title}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h1>
            )}
            {subTitle && <h2>{subTitle}</h2>}
            {price && (
              <h2 className="price">
                £{price}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h2>
            )}
            <div className="banner__btns">
              {enquire && (
                <Button
                  className="btn"
                  text="Enquire Now"
                  as={Link}
                  to="/contact"
                />
              )}
              <Button onClick={scrollToArea} text="Learn More" />
            </div>
          </div>
        </div>
        <div className="gradient"></div>
      </WelcomeBannerStyle>
      <span id="topContent"></span>
    </>
  )
}

export default WelcomeBanner 
