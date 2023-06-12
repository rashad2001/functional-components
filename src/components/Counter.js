import React, { Component } from 'react'

export class Counter extends Component {

    constructor(){
        super()
        this.state  = {
            counter: 0,
            isLiked: false
        }
           }
           

    incrementByOne(){
        this.setState((prevState,props)=>({counter: prevState.counter+1 + props.State}))
    }
    decreasebyOne(){
        this.setState({ 
            counter: this.state.counter - 1
        })
    }
    reset(){
        this.setState({
            counter: 0
        })
    }

    like(){
       if(this.state.isLiked === true){
        this.setState({
            isLiked: false
        })
       }
       else {
        this.setState({
            isLiked: true
        })
       }
       console.log(this.state.isLiked)
    }
    

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={()=>this.incrementByOne()}>+1</button>
        <button onClick={()=> this.decreasebyOne()}>-1</button>
        <button onClick={()=> this.reset()}>reset</button>
        <button onClick={()=> this.like()}>Like</button>
      </div>
    )
  }
}

export default Counter
