import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Hero, { StyledLink } from "../components/Hero"
import color from "../config/color"

export const HomeHeader = styled.h2`
  text-align: center;
  margin: 24px 0;
`
export const ContentWrapper = styled.p`
  margin: 40px auto;
  font-size: 1.618em;
  text-align: center;

  span {
    color: ${color.logo};
  }
`

export const SubHeaderWrapper = styled.div`
  max-width: 965px;
  margin: 0 auto 60px;
`

export const SectionWrapper = styled.div`
  background-color: ${color.lightblue};
  min-height: 500px;
  padding: 60px 0;

  display: flex;

  h3 {
    color: ${color.light};
  }
`

export const SectionContainer = styled.div`
  max-width: 965px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  h3 {
    margin-bottom: 32px;
    text-align: center;
  }
`

export const LearnMoreLink = styled(StyledLink)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
`

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(
      to bottom,
      rgba(49, 60, 64, 0) 0%,
      rgba(49, 60, 64, 0.10) 50%,
      rgba(49, 60, 64, 0.20) 100%
    ),
    ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center right;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 24px;

  span {
    padding: 24px;
    font-size: 2.618em;
    color: ${color.light};
    font-weight: 600;
  }
`

export const HelpWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const HelpLink = styled(Link)`
  text-decoration: none;
`

const HomePage = (props) => {
  return (
    <div className="homepage-page">
      <Hero />
      <SubHeaderWrapper>
        <HomeHeader>Let's work together</HomeHeader>
        <ContentWrapper>
          <span>annona</span> aims to assist agricultural workers, solve food supply disruptions, eliminate food waste,
          and save vulnerable populations from the growing hunger crisis caused by the COVID-19 pandemic.
        </ContentWrapper>
        <LearnMoreLink to="/mission">Learn More</LearnMoreLink>
      </SubHeaderWrapper>
      <SectionWrapper>
        <SectionContainer>
          <h3>What can I do?</h3>
          <HelpWrapper>
            <HelpLink to="/donors">
              <ImageContainer imageUrl="https://i.ibb.co/3yzhcY3/farm.jpg">
                <span>Donate</span>
              </ImageContainer>
            </HelpLink>
            <HelpLink to="/distributors">
              <ImageContainer imageUrl="https://i.ibb.co/GxbBjRh/food-drive-dist.jpg">
                <span>Distribute</span>
              </ImageContainer>
            </HelpLink>
          </HelpWrapper>
        </SectionContainer>
      </SectionWrapper>
    </div>
  )
}

export default HomePage
