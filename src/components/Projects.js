import React from 'react'

export default function Projects() {
  return (
    <div> <section className='py-4 bg-info'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 my-auto'>
          <h4>My Projects</h4>
           </div>
           <div className='col-md-8 my-auto'>
            <h6 className='float-end'>Home/About Us</h6>
           </div>
      </div>
    </div>
   </section>
   {/* <section className='section'>
    <h1>Project#01</h1>
    <p> https://shaistatariq.github.io/app_web/</p>
   </section> */}
   <section className='section'>
    <h1>Project #01</h1>
    <p>
        <a href="https://shaistatariq.github.io/app_web/" target="_blank" rel="noopener noreferrer">
            https://shaistatariq.github.io/app_web/
        </a>
    </p>
</section>

   </div>
  )
}
