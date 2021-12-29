import React from 'react'
import img1 from './img/user.png'
import { Component } from "react";

class Comp extends Component {
     state = {
           Person: {
            fullName: "Bouhaouche Mohammed",
            imgSrc: img1,
            profession: "Aspiring Full Stack JS Web Developer",
            bio: "Full time learner, aspiring web developer with MERN Stack.",
          },
          show: false,

          counter: 0,
        };
  
        

incrementCounter = () => {
    
    this.setState({counter : this.state.counter + 1})
}

componentDidMount(){
setInterval(this.incrementCounter, 1000);
}


handleEvent= () => {
    this.setState({show: !this.state.show})
}






    render() { 

        const FlexClass = {
            display: 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            gap : '20px',
            textAlign : 'start',
            backgroundColor : "lightblue",
            borderRadius : "19px",
            margin: '40px  200px'
        }

        const imgStyle = {
            width : '120px',
            height : '120px'
        }
        return (
          <>
            <h1> The Component is Mounted</h1>
            <p> {this.state.counter} </p>
            <button onClick={this.handleEvent}>
              {this.state.show ? "Hide" : "Show"}
            </button>
            {this.state.show && 
              <div style={FlexClass}>
                <img style={imgStyle} alt="" src={this.state.Person.imgSrc}/>
                <div>
                 <h2>{this.state.Person.fullName}</h2>
                 <p>{this.state.Person.bio}</p>
                 <p>{this.state.Person.profession}</p>
                </div> 
              </div>}
          
           
          </>
        );
    }
}

 
export default Comp;




/*

    incrementCounter = () => {
        const { counter } = this.state;
        this.setState({ counter : counter +1});
    };

    componentDidMount(){

        setInterval(this.incrementCounter, 1000)
    }
    
    -----------------------------------------------------
    
    
    <div className="show">
            <h1> The component has mounted</h1>
            <h2>{this.state.counter}</h2>
            <button onClick={this.handleClick}> {this.state.show ? 'Hide Profile' : 'Show Profile'} </button>
            </div> */