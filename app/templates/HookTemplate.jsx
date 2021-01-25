import React, { useState, useEffect, useContext, useReducer, useRef} from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fal, far, fas, fab);

const HookTemplate = () => {

  /****  useState Hook ****/
  // Returns a stateful value, and a function to update it.
  // During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).
  // The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
  // During subsequent re-renders, the first value returned by useState will always be the most recent state after applying updates.
  const [count, setCount] = useState(0);
  const [didMount, setMount] = useState(false);

  
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }


  /****  useEffect Hook ****/
  // Similar to componentDidMount and componentDidUpdate:
  // Accepts a function that contains imperative, possibly effectful code.
  // The function passed to useEffect will run after the render is committed to the screen. 
  // Think of effects as an escape hatch from React’s purely functional world into the imperative world.
  useEffect(() => {
    if(didMount === false){
      // Treat as componentDidMount
      console.log('We have "Mounted"');
      setMount(true);
    }else{
      // Treat as componentDidUpdate
      console.log("We just Updated");
    }
  });

  /****  useContext Hook ****/
  // NOTE: Redux would make this redundant me thinks!-
  // Rather than passing props down the children props to get parent/root component values, One can use useContext!
  // Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. 
  // The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
  // When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider.
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  const ThemeContext = React.createContext(themes.light);
  function StyledButton() {
    function ThemedButton() {
      const theme = useContext(ThemeContext);
      return (
        <button style={{ background: theme.background, color: theme.foreground }}>
          I am styled by theme context!
        </button>
      );
    }

    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  /****  useReducer Hook ****/
  // An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. 
  // (If you’re familiar with Redux, you already know how this works.)
  // useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
  const initialState = {count: 0};
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  function Counter() {
    return (
      <div>
        Count: {state.count}<br/>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </div>
    );
  }

  function InsularCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <div>
        Insular Count (Also nsular compoent that only renders itself and not the whole thing): {state.count}<br/>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </div>
    );
  }

  /****  Create Custom Hooks!! ****/
  function useMyHook() {
    const [state, setState] = useState(0);
    useEffect(() => {
      setState(Math.round(Math.random() * 10));
    });
    if(state < 5){
      return (<p>Lower than 5 @ {state}</p>);
    }else{
      return (<p>Higher or Equal to 5 @ {state}</p>);
    }
  }
 
  

  //  Our "HTML"
  return (
    <div>
      <h1>Basic Hooks <FontAwesomeIcon className="ml-2"  icon={["fab", "react"]} /></h1>
      <p>You clicked {count} times</p>

      <p>Add Plus 1 (Each click updates a state triggering an Effect hook)</p>
      {/* manipulate our this.state.count hook style */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button><br/>

      {/* click with arrow function */}
      <button onClick={() => setCount((prevCount) => {return prevCount + 1})}>
        Arrow click
      </button><br/>

      {/* click with shorter arrow */}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Shorter Arrow click
      </button><br/><br/>
      
      
      {/* Button used with context */}
      <ThemeContext.Provider value={themes.dark}>
        <StyledButton />
      </ThemeContext.Provider>
      <br/><br/><br/>

      {/* click with useReducer */}
      <p>Using reducers</p>
      <Counter/>
      <br/>
      <InsularCounter/>
      <br/><br/>

      {/* Using costum hooks */}
      <p>Our costum hook returns: {useMyHook()}</p>
    </div>
  );
};

export default HookTemplate;
