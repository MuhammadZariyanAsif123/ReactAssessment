import React,{useState} from "react"
import style from '../components/DevicePreview.module.css'
import userIcon from '../images/userIcon.svg'
import markIcon from '../images/markIcon.svg'
import avatar from '../images/Avatar.svg'
import rectangle124 from '../images/Rectangle 124.svg'
import rectangle125 from '../images/Rectangle 125.svg'
import rectangle128 from '../images/Rectangle 128.svg'
import CallToAction from "./CallToAction"
import ToDoItem from "./ToDoItem"
import TabBar from "./TabBar"
import tickIcon from '../images/Frame 335.png'
import style1 from './ToDoItem.module.css'
import vector from '../images/Vector.svg'
import bin from '../images/bin.svg'
import eye from '../images/Hide.svg'
import darkEyes from '../images/darkeye.svg'
import darkBin from '../images/darkBin.svg'



const DevicePreview = (props) => 
{
   const Header = {
    width: '285.01px',
    height: '13.6px',
    margin: '17px',
    fontWeight: '600',
    color: 'gray',
    fontSize:'12px'
}
   const array = [];
  

 const [toDoList,setToDoList] = useState(array);
 const [count,setCount]=useState(0);
 const [isEyeHovered,setEyeHovered] = useState(false); 
 const [isBinHovered,setBinHovered] = useState(false); 
 const [isHide,setContentHidden] = useState(false);

 const handleEyeHover = () => {
  setEyeHovered(!isEyeHovered);
  
};

const handleBinHover = () => {
  setBinHovered(!isBinHovered);
};

const hide = {
    display:'none'
};

const unHide = {
  display:'inline-block'
};


 const handleDelete = (id) => {
  console.log(id);
  const updatedArray = [...toDoList];
  updatedArray.splice(id,1);
  setToDoList(updatedArray);
}

 const ToogleList =(index) =>
 { 
    const element = toDoList.filter(todo=>todo.id == index);
    setContentHidden(!isHide);
 }


 const AddToDoItem = () =>
 {
    
    setCount(count+1);   
    setToDoList([...toDoList,count]);
              
    
 }

  return (       
   <div className={style.mainContainer}>
    <div className={style.listContainer}>
    <ul>
        {toDoList.map((value,index) => (
          <li key={index}>
           <div style={isHide?hide:unHide}> 
            <img src={tickIcon} style={{width:'20px',height:'20px'}}/> <space></space> <span>TODO</span> {value} </div>
           <img src={isEyeHovered?darkEyes:eye} onClick={()=>ToogleList(index)} onMouseEnter={handleEyeHover} onMouseLeave={handleEyeHover} style={{width:'65px',height:'21px', float:'right'}}></img>
           <img src={isBinHovered?darkBin:bin} onMouseEnter={handleBinHover} onMouseLeave={handleBinHover} onClick={()=>handleDelete(index)} style={{width:'65px',height:'21px',float:'right'}}></img>
          </li>
        ))}
      </ul>
      </div>

    <div className={style.deviceContainer}>
    <nav>
    <img src={userIcon} style={{width:"28px",height:"34px", margin:"20px"}} alt="icon"></img>
    <img src={markIcon} style={{width:"28px",height:"34px", margin:"20px",float:'right'}} alt="icon"></img>    
    </nav>
    <hr style={{color:'white'}}></hr>
    <header style={Header}>NEW MESSAGES</header>
    <img src ={avatar} style={{marginLeft:"10px"}}></img>
    
    <img src ={rectangle124} style={{width:"93.47px" , height:"15.3px"}}></img> 
    <br></br>  
    <img src ={rectangle125} style={{width:"169.95px" , height:"13.6px"}}></img>  
    
    <header style={Header}>GROUP RSVPS</header>
  
    <img src ={rectangle124} style={{width:"176.75px" , height:"15.3px"}}></img>  
    <img src ={rectangle128} style={{width:"62.88px" , height:"33.99px" , float:'right',marginRight:'20px'}}></img>
    <br></br>    
    <img src ={rectangle125} style={{width:"107.07px" , height:"13.6px" , marginLeft:"40px"}}></img>  

     <CallToAction/>
     <br></br>
     <div className={style1.ToDoContainer}>
      <img src={vector} style={{border:'3px solid #ECEDF0' , borderRadius:'50%'}}></img>
      <span style={{cursor:'pointer'}} onClick={AddToDoItem}>New todo item</span>      
    </div>
     <br></br>
     <TabBar/>
    </div>
    </div>    
  )
};

export default DevicePreview;
