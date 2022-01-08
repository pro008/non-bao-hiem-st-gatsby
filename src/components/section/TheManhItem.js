import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TheManhItem = ({ url, alt, title, text }) => {
  const pathImage = getImage(url)

  return (
    <Wrapper>
      <div className="cr_image">
        <GatsbyImage image={pathImage} alt={title} />
      </div>
      <div className="cr_text">
        <h5>{title}</h5>
        {text.split("\n").map(e => {
          return <p key={e}>{e}</p>
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  display: table;
  margin: auto;
  padding: 2.7rem calc(4% + 0px);
  max-width: 85%;
  margin-top: 3px;
  margin-bottom: 3px;
  --borderWidth: 3px;
  background: white;
  position: relative;
  border-radius: var(--borderWidth);
  box-shadow: 0 15px 30px 1px grey;

  :after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(
      60deg,
      #ff9966,
      #ff5e62,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: calc(2 * var(--borderWidth));
    z-index: -1;
    -webkit-animation: animatedgradient 3s ease alternate infinite;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }

  @-webkit-keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .cr_image {
    float: left;
    margin-right: 20px;
  }

  .cr_text > p {
    margin: 0px !important;
  }

  @media (max-width: 960px) {
    .cr_image {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;
    }

    .cr_text h5 {
      text-align: center;
    }
  }
`

export default TheManhItem
