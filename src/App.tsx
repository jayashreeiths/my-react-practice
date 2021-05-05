import React from 'react';

import './App.css';
import MyComponent from './components/MyComponent'
import ToggleMode from './components/ToggleMode'
import ReactToThis from './components/ReactToThis'
import HiddenText from './components/HiddenText'
import Settings from './components/Settings';
import MenuComponent from './components/MenuComponent';
import CountComponent from './components/CountComponent'
function App() {
  let message = 'Hello ';
    message += 'world!'
  return (
    <div className="App">
      <header className="App-header">
      { message }
      <ReactToThis />
      <HiddenText />
       <MyComponent/>
       <ToggleMode/>
       <Settings/>
       <MenuComponent/>
       <CountComponent/>
      </header>
    </div>
  );
}

export default App;
