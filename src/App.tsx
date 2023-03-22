import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./Greetings";
import GreetingsArray from "./GreetingsArray";

function App() {
    const greetings1: string = " Joe "
    const greetings2: string = " Thomas "

    const greetingArray: string[] = [" Maria ", " Anton ", " Dennis "]

  return (
    <div className="App">
        <GreetingsArray peopleToGreet={greetingArray}/>
    </div>
  );
}

export default App;
