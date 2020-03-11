import React, { Component } from 'react'
import Shopcartdesign from './Shopcartdesign'
 
const Shoppingcart =()=>{
   var data = JSON.parse(localStorage.getItem("product"))
   console.log(data)
   
   var alldata=[]
   alldata.push(data)
  //  localStorage.setItem('dataaa',JSON.stringify(alldata))
  //  var a=JSON.parse(localStorage.getItem('dataaa'))
  //  console.log(a)
   return(
    <React.Fragment>
    <h2>THIS IS THE ITEM IN YOUR SHOPPING CART</h2>
    <div className="container">
        <div className="row">
            {alldata.map(ele => {
                return (
                    <div className="col-3" key={ele.id}>
                      
                            <Shopcartdesign
                               
                                img={ele.img}
                                name={ele.name}
                                price={ele.price}
                            />
                            <br></br>
                      
                    </div>
                );
            })}
        </div>
    </div>
</React.Fragment>
   )
 }
export default Shoppingcart