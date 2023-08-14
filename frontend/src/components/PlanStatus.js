import React, { useState } from "react";
import { Link } from "react-router-dom";
import { selpan,my } from "./SubPlan";

export default function PlanStatus() {

  const [status,setStat]=useState("Active");
  const [cls,setcls]=useState("badge text-bg-primary");
  const [cls2,setcls2]=useState("btn btn-outline-primary");
  const changeState=() =>{
    setStat("Canceled");
    setcls("badge text-bg-danger");
    setcls2("invisible");
    console.log(cls2);
  }
  return (
    <div className="container" style={{ width: "50%" }}>
      <h4>
        Current Plan Details <span class={cls}>{status}</span>
        <button type="button" className={cls2} style={{width:"100px",float:"right"}} onClick={()=>{changeState()}}>Cancel</button>
      </h4>
      <pre> {selpan.name}
        {selpan.devices}
      </pre>
      <h3>${selpan.price}/{my===("Monthly")?"mo":"yr"}</h3>
      <div class="d-grid gap-2 col-3 d-md-block">
  <button class="btn btn-outline-primary" type="button"><Link to='/SubPlan'  role="button" style={{width:"100%"}}> Change Plan</Link></button>
</div>
<p style={{ textAlign:"left" , margin:"5px"}}>Your Subscription has started on Jul and will auto renew on Jul</p>
    </div>
  );
}
