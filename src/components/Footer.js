import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
        <section className='section footer bg-dark text-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h6>Personal Information</h6>
                        <hr/>
                        <p className='text-wh'>
                        I have completed my Bachelor's degree in Information Technology (BSIT), which has equipped me with a solid foundation in various aspects of software development, web technologies, and IT systems.
                        My education has enhanced my technical skills and fostered a passion for learning new technologies and applying them to real-world challenges.
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <h6>QuickLinks</h6>
                        <hr/>
                        <div style={{marginLeft:'20px'}}><Link to='/'>Home</Link></div>
                        <div style={{marginLeft:'20px'}}><Link to='/about'>About</Link></div>
                        <div style={{marginLeft:'20px'}}><Link to='/contact'>Contact</Link></div>
                        <div style={{marginLeft:'20px'}}><Link to='/projects'>Projects</Link></div>
                    </div>
                    <div className='col-md-4'>
                        <h6>Contact Us</h6>
                        <hr/>
                        <div className='text-white-mb-1'>Call: 0341-5277985</div>
                        <div className='text-white-mb-1'>Call: 0319-1605989</div>
                        <div className='text-white-mb-1'>WhatssApp: 0311-5558176</div>
                        <div className='text-white-mb-1'>Mail: shaistatariq473@gmail.com</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

