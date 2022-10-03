import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Service from "../Services/Service"
import { TbArrowsHorizontal as HoyrakLogo } from "react-icons/tb"
import { ServicesStyle } from "./ServicesStyle"


const Services = () => {
  return (
    <ServicesStyle className="section section__padding">
    
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
      
              <Service
              title="DEVELOPMENT"
              content1="HTML5 applications"
              content2="content management"
              content3="e-commerce"
              content4="user expirance"
              content5="interactive design">
  
              </Service>
        <span className="perks__divider">
          <HoyrakLogo/>
        </span>
        <Service
              title="DESIGN"
              content1="digital branding"
              content2="visual desing"
              content3="copyrighting"
              content4="marketing strategy"
              content5="project developent">
  
              </Service>
        <span className="perks__divider">
          <HoyrakLogo/>
        </span>
        <Service
              title="MARKETING"
              content1="brand identetiy"
              content2="ad desing and editiing"
              content3="logo desing"
              content4="social media"
              content5="SEO">
  
              </Service>
        
      </div>
    </ServicesStyle>
  )
}

export default Services
