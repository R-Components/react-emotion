import React, { Component } from 'react';
import Emotion from 'react-emotions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onSelectEmotion = () => {

  }
  render() {
    return (
      <div className="App ">
        <Emotion style={{ position: 'absolute' }} type="qq" onSelectEmotion={this.onSelectEmotion} />
      </div>
    );
  }
}

export default App;
