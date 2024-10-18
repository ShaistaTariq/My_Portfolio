
import React from 'react';

export default function MVV() {
  return (
    <div>
      <section className='section bg-c-light border-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mb-4 text-center'>
              <h3 className='main-head'>Mission, Vision, and Values</h3>
              <div className='underline2 mx-auto'></div>
            </div>
            {/* Move col-md-4 divs directly under row */}
            <div className='col-md-4 text-center'>
              <h6>My Mission</h6>
              <p>"My mission as a frontend web developer is to craft intuitive, responsive,
                 and user-friendly web experiences. I aim to continuously learn and adopt new
                  technologies, ensuring high performance and accessibility in every project.
                   By collaborating with teams and understanding user needs, I strive to deliver
                    innovative solutions that enhance the web experience."
              </p>
            </div>
            <div className='col-md-4 text-center'>
              <h6>My Vision</h6>
              <p>"My vision as a frontend web developer is to become a leading creator of 
                seamless and engaging web interfaces that empower users and enhance their 
                online experience. I aspire to stay at the forefront of technology, driving
                 innovation in web development and creating solutions that bridge the gap
                  between user needs and digital possibilities. "
              </p>
            </div>
            <div className='col-md-4 text-center'>
              <h6>My Core Values</h6>
              <p>User-Centered Design: Prioritizing the needs and experiences of users in every project to create intuitive and accessible web applications.
Continuous Learning: Staying updated with the latest technologies and trends to ensure innovative and efficient solutions.
Collaboration: Working effectively with teams, clients, and stakeholders to bring ideas to life and achieve shared goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
