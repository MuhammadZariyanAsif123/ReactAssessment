import React from "react"
import style from './ToDoItem.module.css'
import vector from '../images/Vector.svg'

const ToDoItem = (props) => {
  return (
    <div className={style.ToDoContainer}>
      <img src={vector} style={{border:'3px solid #ECEDF0' , borderRadius:'50%'}}></img>
      <span>New todo item</span>
      <button onClick={()=>props.AddToDoItem}>Click Me</button>
    </div>
  )
};

export default ToDoItem;
