import  React,{ Component } from "react";


class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: "Hi Rashad"
        };

        // this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage = ()=> {
        this.setState({
            message: "Thank you"     
        });
    }
    modifyMessage(){
        this.setState({
            message: "Hi again"     
        });
    }
   render(){
    const {name} = this.props
    const {message} = this.state
    return(
        <div>
            <h1>{name}</h1>
            <h2>{message}</h2>
            <button onClick={this.changeMessage}>Subscribe</button>
            <button onClick={()=>this.modifyMessage()}>Subscribee</button>

        </div>
    )
   }
   
}

export default Message;