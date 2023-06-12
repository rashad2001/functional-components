import React from 'react';

 const Greet = (props) => {

   const {name,surname} = props;

 return(
    <>
 <h1>Hi {name} {surname}</h1>
 
 </>
 )}



export default Greet;