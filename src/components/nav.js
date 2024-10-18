import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar-dark bg-dark shadow'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <nav className='navbar navbar-expand-lg'>
              <div className="container-fluid">
              <span className="navbar-brand">My Portfolio</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link active">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link active">Contact</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/projects" className="nav-link active">Projects</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav> 
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <div className='navbar-dark bg-dark shadow'>
//     <div className='container'>
//       <div className='row'>
//         <div className='col-md-12'>
//         <nav class='navbar navbar-expand-lg'>
         
//           <div class="container-fluid">
//       <a class="navbar-brand" href="#">My Portfolio </a>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarNav">
//         <ul class="navbar-nav">
//           <li class="nav-item">
            
//           <Link to="/" className="nav-link active">Home</Link>

//           </li>
//           <li class="nav-item">
//           <Link to="/about" className="nav-link active">About</Link>

//           </li>
//           <li class="nav-item">
//           <Link to="contact" className="nav-link active">Contact</Link>

//           </li>
//           <li class="nav-item">
//           <Link to="/projects" className="nav-link active">Projects</Link>

//           </li>
//         </ul>
//       </div>
//     </div>
          
//           </nav> 
//           </div>
//       </div>
//     </div>
//     </div>
//   )
// }

