import React, { useState } from "react";
import { Link } from "react-router-dom";
export var selpan=[];
var setselplan=[];
var setmy="";
export var my="Monthly";
export default function SubPlan() {
  const plans = [
    {
      name: "Mobile",
      price: 100,
      quality: "GOOD",
      res: "480p",
      devices: "Phone, Tablet",
    },
    {
      name: "Basic",
      price: 200,
      quality: "GOOD",
      res: "480p",
      devices: "Phone, Tablet, Computer, TV",
    },
    {
      name: "Standard",
      price: 500,
      quality: "BETTER",
      res: "1080p",
      devices: "Phone, Tablet, Computer, TV",
    },
    {
      name: "Premium",
      price: 700,
      quality: "BEST",
      res: "4K+HDR",
      devices: "Phone, Tablet, Computer, TV",
    },
  ];
let [plan,setplan]=useState(plans);
[selpan, setselplan] = useState(0);
[my,setmy]=useState("Monthly");
  const changeplan = (k) => {
    setselplan(plans[k]);
  };


 const changemo=()=>{
  if(my==="Yearly"){
   setmy("Monthly");
    let newplan=[...plan];
    
    newplan.map((pl, key) => {
      pl.price=pl.price/10;
    })
    console.log(newplan);
    setplan(newplan);
   }
 }

 const changeyr=()=>{
   if(my==="Monthly"){
      setmy("Yearly");
      let newplan=[...plan];
      newplan[0].price=0;
      newplan.map((pl, key) => {
        pl.price=pl.price*10;
      })
      console.log(newplan);
      setplan(newplan);
 }}
  

  return (
    <>
      <div className="container" style={{ width: "80%" }}>
        <p>Choose the Right Plan for you </p>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <button
                    type="button"
                    name="btnradio"
                    id="btnradio1"
                    class="btn btn-outline-primary"
                    autocomplete="off"
                    onClick={()=>changemo()}
                    >Monthly
                    </button>

                  <button
                    type="button"
                    name="btnradio"
                    class="btn btn-outline-primary"
                    id="btnradio2"
                    autocomplete="off"
                    onClick={()=>changeyr()}
                  >Yearly
                  </button>
                  
                </div>
              </th>
              <th scope="col">{my} Price</th>
              <th scope="col">Video Quality</th>
              <th scope="col">Resolution</th>
              <th scope="col">Devices you can use to watch</th>
            </tr>
          </thead>

          <tbody>
            {plans.map((plan, key) => {
              return (
                <tr>
                  <th scope="row">
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={()=>changeplan(key)}
                      style={{ height: "70px", width: "200px" }}
                    >
                      {plan.name}
                    </button>
                  </th>
                  <td>${plan.price}</td>
                  <td>{plan.quality}</td>
                  <td>{plan.res}</td>
                  <td>{plan.devices}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>Selected Plan : {selpan.name}</p>
        <div class="d-grid gap-2 col-2 mx-auto">
          <button class="btn btn-primary" type="button">
            <Link
              to="/Payment"
              class="btn btn-primary"
              role="button"
              style={{ width: "100%" }}
            >
              Next
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}