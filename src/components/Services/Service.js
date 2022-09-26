import * as React from "react"
import { ServiceStyle } from "./ServicesStyle"

const Service = ({ title, content1,content2,content3,content4,content5 }) => {
  return (
    <ServiceStyle>
      {title && <h3>{title}</h3>}
      {content1 && <p>{content1}</p>}
      {content2 && <p>{content2}</p>}
      {content3 && <p>{content3}</p>}
      {content4 && <p>{content4}</p>}
      {content5 && <p>{content5}</p>}
     
    </ServiceStyle>
  )
}

export default Service
