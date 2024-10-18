import React from 'react'
import Slider from './Slider'
import { Link } from 'react-router-dom'
import i1 from '../Pictures/i1.jpeg';
import i2 from '../Pictures/i2.jpeg';
import i3 from '../Pictures/i3.jpeg';

import MVV from './MVV';
export default function Home() {
  return (
    <div>
        <Slider/>
        <section className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h3 className='main-head'>My Objective</h3>
                <div className='underline mx-auto'></div>  
                <p>"I am a motivated and detail-oriented frontend web developer with a strong 
                  passion for creating responsive, user-friendly web applications. My expertise 
                  lies in modern web technologies such as HTML, CSS, JavaScript, and React.js.
                   I am eager to apply my skills to build engaging, efficient user interfaces
                    while continuously growing through learning and collaboration. I strive to
                     deliver high-quality work that meets user needs and enhances the overall
                      user experience." </p>
                      <Link to='/about' className='btn btn-warning shadow'>Read More</Link>
</div>
            </div>
          </div>
        </section>

        {/* //  {Mission Vission Value} */}

<MVV/>


{/* {our services} */}

<section className='section border-top'>
  <div className='container'>
    <div className='row'>
      <div className='col-md-12 mb-4 text-center'>
        <h3 className='main-head'>My Projects</h3>
        <div className='underline2 mx-auto'></div>
      </div>

      <div className='col-md-4'>
        <div className='card shadow'>
          <img src={i1} className='w-100 border-bottom' alt='Services' />
          <div className='card-body'>
            <h6>Project 1</h6>
            <div className='underline'></div>
            <p>Developed a dynamic recipe listing application using
            React.js.</p>
            <Link to='projects' className='btn btn-link'>See more</Link>
          </div>
        </div>
      </div>

      <div className='col-md-4'>
        <div className='card shadow'>
          <img src={i2} className='w-100 border-bottom' alt='Services' />
          <div className='card-body'>
            <h6>Project 2</h6>
            <div className='underline'></div>
            <p>Created a basic calculator with React.js, handling
            arithmetic operations.</p>
            <Link to='projects' className='btn btn-link'>See more</Link>
          </div>
        </div>
      </div>

      <div className='col-md-4'>
        <div className='card shadow'>
          <img src={i3} className='w-100 border-bottom' alt='Services' />
          <div className='card-body'>
            <h6>Project 3</h6>
            <div className='underline'></div>
            <p>Created a basic calculator with React.js, handling
            arithmetic operations.</p>
            <Link to='projects' className='btn btn-link'>See more</Link>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

{/* {Footer Part} */}





       
   </div>
  
  
    
  )
}
