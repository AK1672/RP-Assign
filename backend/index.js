const cors=require("cors");
const express=require("express");
const stripe=require("stripe")("sk_test_51NbbUxSAYHXBHc4Upa4q2oyMoOZRhJxV980NbHrSdJP2MI7X35g03jp3eOfGlUEjdsfG7vfC6Qehfmejde9KmCEy00pL4kcMlH");
const uuid=require("uuid");
const mongoose=require("mongoose");

const app=express();

app.use(express.json());
app.use(cors());


app.get("/",(req,res) =>{
    res.send("It is working");
});

app.post("/pay",(req,res)=>{
    const {product,token} =req.body;
    const idempontencyKey =uuid();

    return stripe.customer.create({
        email:token.email,
        source:token.id
    }).then(customer =>
        stripe.charges.create({
            amount:product.price*100,
            currency:'usd',
            customer:customer.id,
            desciption:product.name,
        },{idempontencyKey}))
        .then(result=>res.status(200).json(result))
        .catch(err=>console.log(err))
})


app.listen(8282, ()=>console.log("Listening at 8282 port"));