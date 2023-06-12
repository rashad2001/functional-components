import React, { useState } from 'react'

function Form() {

 const [username, setUsername] = useState("")
 const [topic, setTopic] = useState("Vue");

 const changeTopic = (event) => {
    setTopic(event.target.value);
 }

 const changeUsername = (event) => {
    setUsername(event.target.value)
 }

 const handleSubmit = (event) => {
    alert("Call me back")
    event.preventDefault()
 }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <p>Username: {username}</p>
        <input type = "text" ></input>
   

    <select value={topic} onChange={changeTopic}>
        <option>Angular</option>
        <option>Vue</option>
        <option>React</option>
    </select>
    <button>Submit</button>
    </form>
    </>
  )
}

export default Form
