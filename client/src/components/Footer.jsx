import React from "react"
import styled from "styled-components"

import color from "../config/color"

export const FooterWrapper = styled.div`
  height: 100px;
  background-color: ${color.blue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    padding: 16px;
    color: ${color.light};
  }

  a {
    color: ${color.light};
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; annona 2020 | All rights reserved</p>
      <p>Contact us: <a href="mailto:nasaspaceappsteam&gmail.com">nasaspaceappsteam@gmail.com</a></p>
    </FooterWrapper>
  )
}

export default Footer
