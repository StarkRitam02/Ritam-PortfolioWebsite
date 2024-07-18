// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import Title from '../Title/Title';

const Services = () => {
  return (
    <div  id='services' className='services'>
      <Title text="My Services" />
      <div className='services-container'>
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className='services-format'>
              <h2>{service.s_no}</h2>
              <h1>{service.s_name}</h1>
              <p>{service.s_desc}</p>
              <div className='services-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt=''/>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services