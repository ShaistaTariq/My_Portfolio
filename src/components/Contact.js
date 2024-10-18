import React from 'react'

export default function Contact() {
  return (
    <div >
     
   <section className='py-4 bg-info'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 my-auto'>
          <h4>Contact Us</h4>
           </div>
           <div className='col-md-8 my-auto'>
            <h6 className='float-end'>Home/About Us</h6>
           </div>
      </div>
    </div>
   </section>
   <section className='section'>
    <div className='container'>
      <div className='card shadow'>
        <div className='card body'>
          <div className='row'>
            <div className='col-md-6'>
              <h6>Contact Form</h6>
              <hr/>
              <div className='form-group'>
                <label className='mb-1'>Full Name</label>
                <input type='text' className='form-control' placeholder='Enter Full Name'/>
              </div>
              <div className='form-group'>
                <label className='mb-1'>Phone Number</label>
                <input type='text' className='form-control' placeholder='Enter Phone Number'/>
              </div>
              <div className='form-group'>
                <label className='mb-1'>Email Address</label>
                <input type='text' className='form-control' placeholder='Enter Email Address'/>
              </div>
            
              <div className='form-group'>
                <label className='mb-1'>Message</label>
                <textarea rows={3} className='form-control' placeholder='Type Your Message....'/>
              </div>
              <div className='form-group py-3'>
               
                <button type='button' className='btn btn-primary shadow w-100'> Send Message</button> 
              </div>
            </div>
            <div className='col-md-6 border-start'>


              <h5>Address Information</h5>
              <div className='underline'></div>
              <p>
                #AharMall Scheme, Satellite Town, Rawalpindi
              </p>
              <p>Phone Number: 0341-5277985</p>
              <p>Email: shaistatariq473@mail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
    
</div>

  )
}
