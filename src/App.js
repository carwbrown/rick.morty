import React from 'react';
import './App.css';
import Characters from './containers/Characters';
import Locations from './containers/Locations';
import Episodes from './containers/Episodes';

/* 
	todo
	finish styling cards
	tab navigation for different sections
	pagination for the different tabbed sections
	try doing some simple stuff with GQL / Apollo
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<h1>Rick and Morty Information</h1>
        <Characters />
        <Locations />
        <Episodes />
      </header>
    </div>
  );
}

export default App;
