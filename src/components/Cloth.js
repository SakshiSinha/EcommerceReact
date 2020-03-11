import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'
import Product from './Product'
import ProductList from "./ProductList";
import ProductRoute from "./ProductRoute";
import array from "./clothData.json";
import AllProducts from './AllProducts'

export default class Cloth extends Component {
   
    render() {
        //console.log('cloth :', this.props)
        return (
            <div>
                THIS IS CLOTH PAGE

                <Link  className="bg-warning p-3 m-3" to="/cloth/men">MENS</Link>
                <Link  className="bg-warning p-3 m-3" to="/cloth/women">WOMENS</Link>
                <Link   className="bg-warning p-3 m-3" to="/cloth/kid">KIDS</Link>
                <Link  className="bg-danger  float-right p-2  mt-2 mr-2 border border-dark "  to="/cloth/asc"> Filter Your shopping by PRICE</Link>

                <Route path="/cloth/men" render={(props)=> <Details {...props} name="mens"/>}/>
                <Route path="/cloth/women" render={(props)=> <Details {...props} name="womens"/>}/>
                <Route path="/cloth/kid" render={(props)=> <Details {...props} name="kids"/>}/>
                <Route exact path="/cloth" render={props => (<ProductList {...props} productArr={array} />)} />
                <Route path="/cloth/:id" render={props => (   <ProductRoute {...props} productArr={array} />)}/>
                <Route  path="/cloth/:orderBy(asc|desc)" render={props => {
                console.log(props);
                return <AllProducts productArr={array} {...props} />;
              }}
            />
            
            </div>
        )
    }
}

const Details = props => {
    if (props.name === "mens") {
        return (
            <Product
                img="https://images.unsplash.com/photo-1534369671220-7a1bceeaf2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                price="456.00"
               category="Mens"
               {...props}

            />

        );
    } else if (props.name === "womens") {
        return (
            <Product
                img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                price="456.00"
                category="womens"
                {...props}
            />
        );
    } else if (props.name === "kids") {
        return (<div>
  <Product
                img="https://images.unsplash.com/photo-1560506840-ec148e82a604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                price="456.00"
                category="Kids"
                {...props}
            />
            <Product
            img="https://images.unsplash.com/photo-1560859259-fcf2b952aed8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            price="456.00"
            category="kids"
            {...props}
        />


        </div>
           

        );
    
    }
};
