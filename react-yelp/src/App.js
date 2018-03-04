import React, { Component } from 'react';
import logo from './logo.svg';
import YelpForm from './components/YelpForm'
//import YelpResults from './components/YelpResults'
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <YelpForm />
        {/* <YelpResults /> */}
      </div>
    );
  }
}

export default App;
