import React from 'react'
import {Link} from 'react-router-dom'
import Product from './Product'

export default function AllProducts(props) {
    console.log(props)
    let arr = [...props.productArr];
    console.log(arr)
    if (props.match.params.orderBy === "asc") {
        arr.sort((a, b) => a.price - b.price);
      } else if (props.match.params.orderBy === "desc") {
        arr.sort((a, b) => b.price - a.price);
      }
    return (
        <React.Fragment>
        <h2> Products </h2>
        {props.match.params.orderBy === "asc" ? (
          <Link  className="bg-info p-1 mb-5 border border-dark m-3" to="/cloth/desc"> Order By Descending Price</Link>
        ) : (
          <Link className="bg-info p-1 mb-5 border border-dark m-3"  to="/cloth/asc"> Order By Ascending Price</Link>
        )}
        <div style={{ border: "1px solid black" }}>
            <div className="container">
                <div className="row">
                {arr.map(ele => {
            return (
              <div key={ele.id} className="col-3" >
                  { <Product
                                        id={ele.id}
                                        img={ele.img}
                                        name={ele.name}
                                        price={ele.price}
                 />}
              
              </div>
            );
          })}
                </div>
          
            </div>
       
        </div>
      </React.Fragment>
    )
}
