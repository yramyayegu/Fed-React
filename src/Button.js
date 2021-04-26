import React  from "react";

function Button(props){

     let buttondisplay = (props.action === '-') ? "Previous" : "Next";
     let buttonaction = (data) =>{
        props.fun(data)
     }
    return(
        <div className="btndiv">
        <button className="btn" onClick={()=>buttonaction(props.action)} >{buttondisplay}</button>
        </div>
    )
}


export default Button;