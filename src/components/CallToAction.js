import React from "react"
import FeaturedImage from '../images/Featured Image.svg'
import style from './CallToAction.module.css'

const CallToAction = (props) =>
 {
  return (
    <div className={style.callToActionContainer}>
      <img src={FeaturedImage} style={{width:'352.65px',height:'124px'}}></img>

      <a href='https://www.google.com/' target="_blank"> 
      <button className="btn btn-secondary" 
      
      style={{marginTop:'20px', width:'250px' ,height:'30px' ,backgroundColor:'white',border:'1px solid black' , borderRadius:'10px'}}>Learn More
    
      </button>
      </a>
    </div>
  )
};

export default CallToAction;

