import React, { Component } from 'react'
import Navbar from './components/Navbar'
import {Route} from 'react-router-dom'
import About from './components/About'
import Cloth from './components/Cloth'
import Electronic from './components/ELectronics'
import Contact from './components/Contact'
import Help from './components/Help'
import Login from './components/Login'
import Home from './components/Home'
import ShoppingCart from './components/Shoppingcart'
// import array from './components/clothData.json'




export default class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     added:[]
  //   }
  // }
  // handleAdded=(selected)=>{
  //   this.setState({
  //     added:[...this.state.added,selected]
  //   })
  // }
  render() {
    return (
      <React.Fragment>

       <Navbar/>
      <Route path='/' exact component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/about" component={About}/>
        <Route path="/cloth" component={Cloth}/>
        <Route path="/elec" component={Electronic}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/help" component={Help}/>
        <Route path="/shoppingcart" render={(props)=><ShoppingCart  {...props} 
      //  products={array} handleAdded={this.handleAdded} added={this.state.added}
        />}/>


      </React.Fragment>
      
      
      
    )
  }
}
