import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";


export default function Product(props) {
  
  
  return (
    <React.Fragment>
  
    <Card style={{width:"200px"}}>
      <CardActionArea>
        <CardMedia 
           style={{height:"200px", width:"200px",}}
          component="img"
          image={props.img}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Rs.{props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
    </React.Fragment>
  );
}
