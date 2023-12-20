import React from "react"
import style from '../components/HomeField.module.css'
import icon from '../images/phoneIcon.png'
import previewIcon from '../images/phonePreviewIcon.svg'
import thumbsUp from '../images/thumbUp.svg'
import tickIcon from '../images/Frame 335.png'

const prevViewText = {
        fontSize: '18px',
        lineHeight: '21.78px',
        fontWeight: '600',
        margin: '20px',
}

const HomeFeed = (props) => 
{
  return (
    <div className={style.MainContainer}>
   <div className={style.HomeFeedContainer}>
      <img src={icon} style={{width:"23px",height:"26px", margin:"20px"}} alt="icon"></img>
      <h1>Homefeed</h1>
      <button className={style.HomeFeedButton}>+</button>
    </div>
    <br></br>
    <div className={style.livePreviewContainer}>
    <img src={previewIcon} style={{width:"28px",height:"28px", margin:"20px"}} alt="icon"></img>
    <h2 style={prevViewText}>Live Preview</h2>
    </div>
    
    <div className={style.hide}>
    <div className={style.CallToActionContainer}>
    <img src={thumbsUp} style={{margin:"20px",fontSize:'20px'}} alt="icon"></img>
    <h2 style={prevViewText}>Call to Action</h2>
    </div>

    <div className={style.ToDoContainer}>
    <img src={tickIcon} style={{margin:"20px",fontSize:'20px'}} alt="icon"></img>
    <h2 style={prevViewText}>Todo</h2>
    </div>

    </div>

    <div className={style.CallToActionContainer}>
    <img src={thumbsUp} style={{width:"28px",height:"34px", margin:"20px"}} alt="icon"></img>
    <h2 style={prevViewText}>Call to Action</h2>
    </div>

    <div className={style.ToDoContainer}>
    <img src={tickIcon} style={{width:"28px",height:"28px", margin:"20px"}} alt="icon"></img>
    <h2 style={prevViewText}>Todo</h2>
    </div>
    
    
 
    </div>
    
  )
};

export default HomeFeed;
