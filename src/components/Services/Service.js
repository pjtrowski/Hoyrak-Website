import * as React from "react"
import { ServiceStyle } from "./ServicesStyle"

const Service = ({ children, title, content }) => {
  return (
    <ServiceStyle>
      {children}
      {title && <h3>{title}</h3>}
      {content && <p>{content}</p>}
    </ServiceStyle>
  )
}

export default Service
