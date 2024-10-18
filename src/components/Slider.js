import React from 'react'
import download2 from '../Pictures/download2.jpeg';
import download1 from '../Pictures/download1.jpeg';
import images1 from '../Pictures/images1.jpeg';
 

export default function Slider() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={images1} alt="First slide"style={{height:'350px'}} />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src= {download1} alt="Second slide" style={{height:'350px'}} />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={download2} alt="Third slide" style={{height:'350px'}} />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
  )
}
// 