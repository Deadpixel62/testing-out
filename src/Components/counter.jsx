import React from "react";
import { Component } from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

//setState() os async, so we need to use a callback function to update the state

    increment(){
        this.setState({
            count : this.state.count +1
        })
    }

    decrement(){
        this.setState({
            count : this.state.count -1
        })
    }

    componentDidMount() {
        
    }

    render () {
        return (
          <div classNaame="App">
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}> +  </button>
            <button onClick={this.decrement}> -   </button>
          </div>
        );
    }
}

export default Counter 