// import React from "react";
import React, { Component } from "react";
import PicturesCard from "./components/PicturesCard";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // setting state to json array
  state = {
    friends,
    score: 0,
    highscore: 0
  };

  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(card => {
      card.count = 0;
    });
    this.setState({ score: 0 });
    return true;
  }

  clicks = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if (friends[i].count === 0) {
          friends[i].count = friends[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.endGame();
        }
      }
    });
  }
  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highscore={this.state.highscore}></Navbar>
        <Hero backgroundImage=" https://img.freepik.com/free-vector/minimal-triangle-pattern-design-pastel-colors_1017-14885.jpg?size=338&ext=jpg">
          <h1>Clicky Game</h1>
          <h2>Click an image ONCE to earn points...</h2>
          <h2>if you click the same image more than once, game over.</h2>
        </Hero>
        {this.state.friends.map(card => (
          <PicturesCard
          clicks={this.clicks}
          id={card.id}
          key={card.id}
          image={card.image}
          />
        ))}
      </Wrapper>
      // <Footer></Footer>
    );
        }
      
   
  // function App() {
  //   return (
  //     <div>
  //       {/* Navbar */}
  //       <Navbar />

  //       {/* Header */}
  //       <Hero backgroundImage=" https://img.freepik.com/free-vector/minimal-triangle-pattern-design-pastel-colors_1017-14885.jpg?size=338&ext=jpg">
  //         <h1>Clicky Game</h1>
  //         <h2>Click an image ONCE to earn points...</h2>
  //         <h2>if you click the same image more than once, game over.</h2>
  //       </Hero>

  //       <Wrapper>
  //         <PicturesCard
  //           name={friends[0].name}
  //           image={friends[0].image}
  //         />
  //         <PicturesCard
  //           name={friends[1].name}
  //           image={friends[1].image}
  //         />
  //         <PicturesCard
  //           name={friends[2].name}
  //           image={friends[2].image}
  //         />
  //         <PicturesCard
  //           name={friends[3].name}
  //           image={friends[3].image}
  //         />
  //         <PicturesCard
  //           name={friends[4].name}
  //           image={friends[4].image}
  //         />
  //         <PicturesCard
  //           name={friends[5].name}
  //           image={friends[5].image}
  //         />
  //         <PicturesCard
  //           name={friends[6].name}
  //           image={friends[6].image}
  //         />
  //         <PicturesCard
  //           name={friends[7].name}
  //           image={friends[7].image}
  //         />
  //         <PicturesCard
  //           name={friends[8].name}
  //           image={friends[8].image}
  //         />
  //         <PicturesCard
  //           name={friends[9].name}
  //           image={friends[9].image}
  //         />
  //         <PicturesCard
  //           name={friends[10].name}
  //           image={friends[10].image}
  //         />
  //         <PicturesCard
  //           name={friends[11].name}
  //           image={friends[11].image}
  //         />
  //       </Wrapper>

  //       <Footer />
  //     </div>

  //   );

  }

  export default App;
