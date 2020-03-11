import React from "react";
import { Link } from "react-router-dom";
import Product from './Product'

export default function ProductList(props) {
  //  console.log(props);
    return (
        <React.Fragment>
            <h2>Products</h2>
            <div className="container">
                <div className="row">
                    {props.productArr.map(ele => {
                        return (
                            <div className="col-3" key={ele.id}>
                                <Link to={`${props.match.url}/${ele.id}`}>
                                    <Product
                                        id={ele.id}
                                        img={ele.img}
                                        name={ele.name}
                                        price={ele.price}
                                    />
                                    <br></br>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}
