import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        console.log("Button clicked");
        
    }

  render() {
//   function  clickHandler(){
//         console.log("Button clicked");
//     }
    return (
      <div>
        <button onClick={this.clickHandler}>Click Class</button>
      </div>
    )
  }
}

export default ClassClick
