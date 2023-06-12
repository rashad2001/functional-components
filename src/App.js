
import React,{ Component } from 'react';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import UseState from './components/UseState';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';

class App extends Component {
 render(){
  return (
    <div className="App">
     {/* <Greet name ="Rashad" surname = "Azimov">
     </Greet> */}
     {/* <Message name = "Bruce">

     </Message> */}

     {/* <Counter/> */}

     {/* <FunctionClick></FunctionClick> */}
     {/* <ClassClick></ClassClick> */}
{/* 
     <UseState></UseState> */}
     {/* <NameList></NameList> */}

     {/* <Stylesheet primary = {true}></Stylesheet> */}

     <Form/>
    </div>
  );
 }
}

export default App;
