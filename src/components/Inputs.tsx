import React from "react";

const  Input =(props:any)=>{

    return (
        <tr>
           <td><label htmlFor={props.name}>{props.label}{props.star === true ? <span>*</span>:""}</label></td> 
           <td><input  id={props.name} name={props.name} onChange={props.onChange} className="text" type={props.type || "text"} /></td>
           <div style={props.error ===''?{display:'none'}:{ display:'block',color:'red',width:'100%',fontSize:'10px',textAlign:'justify',visibility:'visible',padding:'2px'}}>{props.error}</div>
        </tr>
    )



}


export default Input