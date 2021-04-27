import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import styled from 'styled-components'
import { device } from '../utils/device'

const StyledHeroSection = styled.div`
.home__hero-section {
  color: #fff;
  padding: 160px 0;
}
.darkBg {
  background-color: #1c2237;
}
`

const StyledTopLine = styled.div`
color: #f00946;
font-size: 16px;
/* 行高 */
line-height: 16px;
/* 於 CSS1 中出現, 字體的粗度 400 是正常 700 相當於 bold  */
font-weight: bold;
/* 改變字元間的寬度 */
letter-spacing: 1.4px;
/* 強制大寫 */
text-transform: uppercase;
margin-bottom: 16px;
`

const StyledImg = styled.div`
max-width: 555px;
.home__hero-img {
  max-width: 95%;
  padding-right: 0;
  margin: 0 0 0 10px;
}
img {
  border: 0;
  max-width: 50%;

  /* 用來指定行內元素與表格單元格的對齊方式 */
  vertical-align: middle;
  display: inline-block;
}
`

const StyledContainer = styled.div`
.row {
  display: flex;
  margin-right: -15px;
  margin-bottom: -15px;
  margin-left: -15px;
  flex-wrap: wrap;
  align-content: stretch;
}

.col {
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex-grow: 1;
  max-width: 50%;
  flex-basis: 50%;
}

.home__hero-row {
  align-items: center;
}

.home__hero-text-wrapper {
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
}

.heading {
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
}

.dark {
  color: #1c2237;
}

.home__hero-subtitle {
  /* 調整一句話的長度讓他變好看 */
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
}

@media screen and ${device.mobile} {
  .container{
    padding-right: 30px;
    padding-left: 30px;
  }
}

@media screen and ${device.desktop} {
  .home__hero-text-wrapper {
    padding-bottom: 65px;
  }
  .col {
    max-width: 100%;
    flex-basis: 100%;
  }
}
`




function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <StyledHeroSection>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <StyledContainer>
          <div className='container'>
            <div className='row home__hero-row'
              style={{ display: 'flex',
                flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}
            >
              <div className='col'>
                <div className='home__hero-text-wrapper'>
                  <StyledTopLine>{topLine}</StyledTopLine>
                  <h1 className={lightText ? 'heading' : 'heading dark'} > {headline}</h1>
                  <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                    {description}
                  </p>
                  <Link to="/sign-up">
                    <Button buttonSize='btn--wide' buttonColor='blue'>
                      {buttonLabel}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className='col'>
                <StyledImg>
                  <img src={img} alt={alt} className='home__hero-img' />
                </StyledImg>
              </div>
            </div>
          </div>
        </StyledContainer>
      </div>
    </StyledHeroSection>
  )
}

export default HeroSection
