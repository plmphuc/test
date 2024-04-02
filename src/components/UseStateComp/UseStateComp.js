import React, { useState } from 'react';
import 'App.css'

// 1. updater => change state immediately (multiple setState can change in one re-render) 
//      setState(currentState => currentState + 1) => it takes a pending state and calculates the next state from it
//       by convention, the pending state is named for the 1st letter of state like a/prevAge for age

// 2. Updating objects and arrays in state: objects state should be replace instead of mutating
//     map and filter function ensure the state array is replaced (not mutated)

// 3. Avoiding re-creating the initial state
//     if using a function to create a state, call it like useState(createInitialTodos()) can make re-call this function every re-render. 
//     you should pass it as an initilizer function useState(createInitialTodos)

// 4. Resetting state with a key => by changing key of component
function UseStateComp(props) {
  const [text, setText] = useState("hello world");

  const handleChange = (e) => {
   setText(e.target.value)
  } 

  return <div className='wrapper'>
    <div className='container'>
      <span>You typed: {text}</span>
      <input value={text} onChange={handleChange}/>
    </div>
  </div>;
}

export default UseStateComp;
