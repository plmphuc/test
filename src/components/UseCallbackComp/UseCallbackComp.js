import React from 'react';

// 1. let you cache the function definition between re-renders
// 2. only returns other function when one of dependencies has changed
// 3. beside that, we can skip re-renders not-changed child component to optimize by using memo
  // by using memo, component will only re-render when one of props has changed
  // (not re-render because of the re-render of parent component)
// 4. updating state from a memoized callback
// 5. when you read some state only to calculate the next state, you can remove the dependency by passing updater function instead

// 6. preventing an effect from firing too often. if you declare a function outside useEffect and call it inside useEffect,
//  you must include it in dependencies, and the re-render can make this function re-declare in every re-render and
//  lead to re-connect constantly (not optimize)
//  to handle this, you can wrap your function with useCallback

//  However, it’s even better to remove the need for a function dependency. Move your function inside the Effect 
//  you also do not need to useCallback if the function is inside useEffect

// if you are writing a custom hook, it is recommended to wrap any functions that it returns into useCallback
function UseCallbackComp(props) {
  return (
    <div>
      
    </div>
  );
}

export default UseCallbackComp;