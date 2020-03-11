import React, { Component } from "react";
import { Paper, Container, Box, TextField , Button } from "@material-ui/core";
import { Redirect } from "react-router-dom"

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            isAuth:false
        }
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        if(this.state.username==="masai" && this.state.password==="school"){
            console.log("LOGIN SUCCESSFUL")
            this.setState({
                isAuth:true
            })
        }
        else{
           alert("ENTER A VALID LOGIN DETAILS")
        }
     
        
    }

  render() {
    // console.log('login :', this.props )

    return (
       
      <Container>
           {this.state.isAuth ? (
            <Redirect to={{ pathname: "/shoppingcart" }} />
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )}
        <Box>
          <Paper className="col-4 mt-5 offset-4 justify-content-center " elevation={3} >
            <h2 className="text-center">LOGIN </h2>
            <form className="mt-3 mb-5" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
             
              <TextField id="filled-full-width" onChange={this.handleChange} name="username" value={this.state.username}  label="USERNAME" placeholder="Enter your Username"
                fullWidth margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                variant="filled"
              />

              <br></br>

              <TextField id="filled-full-width" label="PASSWORD" placeholder="Enter your Password"
                fullWidth margin="normal" onChange={this.handleChange} name="password" value={this.state.password} 
                InputLabelProps={{
                  shrink: true
                }}
               variant="filled"
              />

              <br></br>

              <div className="text-center"> 
              <Button type="submit" className=" mt-2 "  variant="contained" color="primary">
                SIGN IN
              </Button>
              </div>
            
              <br></br>
              <br></br>
            </form>
          </Paper>
        </Box>
      </Container>
    );
  }
}
