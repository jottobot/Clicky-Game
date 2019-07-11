//     default  named
import React, { Component, Fragment } from 'react';
import PicturesCard from './components/PicturesCard';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import friends from './friends.json';
import './App.css';

// configuration - class - stateful WE CAN USE "THIS"
class App extends Component {
  // setting state to json array
  state = {
    friends,
    score: 0,
    highscore: 0,
    // using this as example to show what props can do
    spanData: 'Clicky Game: 2019',
    // title: "Clicky Game"
  };

  // api call (this case calling friends.json) - set that data to state

  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(card => {
      card.count = 0;
    });
    this.setState({ score: 0 });
    return true;
  };

  clicks = id => {
    // eslint-disable-next-line array-callback-return
    this.state.friends.find((friend, index) => {
      if (friend.id === id) {
        if (friends[index].count === 0) {
          friends[index].count = friends[index].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.endGame();
        }
      }
    });
  };

  render() {
    // define variables - define methods
    // explicit - we told it to return something
    // implied - we didn't tell it, but it returned undefined
    return (
      <Fragment>
          <Navbar title={this.state.title} score={this.state.score} highscore={this.state.highscore} /> 
          <Hero backgroundImage=" https://img.freepik.com/free-vector/minimal-triangle-pattern-design-pastel-colors_1017-14885.jpg?size=338&ext=jpg">
            <h1>Clicky Game</h1>
            <h2>Click a candy ONCE to earn points...</h2>
            <h2>if you click the same candy more than once, game over.</h2>
          </Hero>
          <Wrapper>
          {/* higher order function - takes a function as an argument or returns a function */}
          {this.state.friends.map(friend => (
            <PicturesCard
              clicks={this.clicks}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </Wrapper>
        <Footer spanData={this.state.spanData} />
      </Fragment>
    );
  }
}
export default App;