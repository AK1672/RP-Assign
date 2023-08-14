import React, { useState } from "react";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { selpan,my } from "./SubPlan";

export default function Payment() {
  const [product] = useState({
    name: selpan.name,
    price: selpan.price,
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application.json",
    };

    return fetch("http://localhost:8282/pay", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container" style={{ width: "80%" }}>
        <div class="row align-items-start">
          <div class="col">
            <h2>Complete Your Payment</h2>
            <div
              class="d-grid gap-2 col-6 d-md-block"
              style={{ margin: "5px" }}
            >
              <StripeCheckout
                stripeKey="pk_test_51NbbUxSAYHXBHc4U5NhcG5GXoA6gyBL2XcCRlIe5lHWB3neXIHVqs5S3SMitIPGiCvf3tqTzmI4G4n1f7nJDFa2W00Kc6QXSD0"
                token={makePayment}
              >
                <button class="btn btn-primary" type="button">
                  <Link
                    to="/PlanStatus"
                    class="btn btn-primary"
                    role="button"
                    style={{ width: "100%" }}
                  >
                    Enter your Card Details
                  </Link>
                </button>
              </StripeCheckout>
            </div>
          </div>
          <div class="col" style={{ backgroundColor: "white" }}>
            <h4>Order Summary</h4>
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Plan Name</th>
                  <td>{selpan.name}</td>
                </tr>
                <tr>
                  <th scope="row">Billing Cycle</th>
                  <td>{my}</td>
                </tr>
                <tr>
                  <th scope="row">Plan Price</th>
                  <td>${selpan.price}/{my===("Monthly")?"mo":"yr"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
