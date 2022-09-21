import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Service from "../Services/Service"
import { MdOutlineClose as Cross } from "react-icons/md"
import { ServicesStyle } from "./ServicesStyle"

const Services = () => {
  return (
    <ServicesStyle className="section section__padding">
    
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Service
          title="Built For Speed"
          content="By using GatsbyJS, the Barcadia site is super-fast out of the box"
        >
          <StaticImage
            src="../../../static/logos/gatsby-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Service>
        <span className="perks__divider">
          <Cross/>
        </span>
        <Service
          title="Built For Content"
          content="Contentful helps you edit your application with ease as your business expands"
        >
          <StaticImage
            src="../../../static/logos/contentful-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Service>
        <span className="perks__divider">
          <Cross/>
        </span>
        <Service
          title="Built For Content"
          content="Contentful helps you edit your application with ease as your business expands"
        >
          <StaticImage
            src="../../../static/logos/contentful-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Service>
        
      </div>
    </ServicesStyle>
  )
}

export default Services
