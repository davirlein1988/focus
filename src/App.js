import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
        
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Focus, An app to develop you smartness</h1>
        </header>
        
        <p className="App-intro"></p>
          <Board />
      </div>
    );
  }
}

function Square(props) {
      return (
      <button className="square" onClick={function() {alert('inside div1!!!') }}>
        <img src={process.env.PUBLIC_URL + "/images/" +props.src} />
      </button>
    );
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class Board extends React.Component {

  constructor(){
    super();
    let animals = ['bear.gif', 'cat.gif','cheetah.gif','crocco.gif','crow.gif','dog.gif','eagle.gif','falcon.gif','got.gif','hummingbird.gif','lion.gif','ray.gif', 'shark.gif', 
    'bear.gif', 'cat.gif','cheetah.gif','crocco.gif','crow.gif','dog.gif','eagle.gif','falcon.gif','got.gif','hummingbird.gif','lion.gif','ray.gif', 'shark.gif']; 
    animals = shuffle(animals);
    this.state = {
      animals : animals
    }
  }



  renderSquare(i) {
    return <Square src={this.state.animals[i]} />;
  }

  render() {
    const status = 'Pick Squares with the same image!!!';

    return (

      <div>
        <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
          </div>
          <div className="board-row">
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
          </div>
          <div className="board-row">
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
          </div>           
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


export default App;
