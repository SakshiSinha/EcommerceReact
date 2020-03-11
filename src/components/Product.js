import React, { Component } from 'react'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";



export default class Product extends Component {
  constructor(props){
    super(props)
    this.state={
       product:props
    }
  }
  handleClick=(props)=>{
    this.setState({
      product:props
    })
    localStorage.setItem("product",JSON.stringify(this.state.product))
    this.props.history.push('/login')
   console.log(this.state.product)
  }

  render() {
  //console.log(this.props.id)
 // console.log('props : ', this.props)
    return (
      <div>
        <Card style={{width:"250px"}}>
      <CardActionArea>
        <CardMedia 
           style={{height:"300px", width:"300px"}}
          component="img"
          image={this.props.img}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Rs.{this.props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
  <Button style={{width:"300px"}} onClick={() => this.handleClick(this.props)} variant="contained" color="primary">
          ADD TO CART
        </Button>
        {/* <Shoppingcart data={this.state.product}/> */}
      
         
      </CardActions>
    </Card>
      </div>
    )
  }
}

