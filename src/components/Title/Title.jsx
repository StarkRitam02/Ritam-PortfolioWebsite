// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Title.css';
import theme_pattern from "../../assets/theme_pattern.svg";

// eslint-disable-next-line react/prop-types
const Title = ({text}) => {
  return (
    <div className="title-container">
        <h1>{text}</h1>
        <img src={theme_pattern} alt="theme_pattern" />
    </div>
  )
}

export default Title