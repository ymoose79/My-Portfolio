import React from "react";
import TicTacToe from "./ImagesPortfolio/TicTacToe.png";
import theOddsApi from "./ImagesPortfolio/theOddsApi.png";
import pcb from "./ImagesPortfolio/pcb.png";
import Todo from "./ImagesPortfolio/Todo.png";
import airBnbSpoof from "./ImagesPortfolio/airBnbSpoof.png";

import "react-popupbox/dist/react-popupbox.css";
import PopUpBox from "./PopUpBox";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-wrapper" >
      <div className="container">
        <h1 className="text -uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <PopUpBox
            src={TicTacToe}
            text="TicTacToe"
            url="https://heuristic-thompson-b85607.netlify.app"
            git="https://github.com/ymoose79/tic-tac-toe"
            p='Basic Tic-Tac-Toe with modules and where Player 1 gets to choose "O"s or "X"s'
          />
          <PopUpBox
            src={theOddsApi}
            text="The Odds Api"
            p=" User selects a Sport and all upcoming games populate with relative gambling information"
            url="https://thirsty-jackson-5c987d.netlify.app"
            git="https://github.com/ymoose79/sports-odds" />
          <PopUpBox
            src={pcb}
            text="pre-coding bootcamp"
            url="https://pre-codingbootcamp.com"
            git=""
            p='Wordpress site to help potential coding bootcamp students get prepared' />
          <PopUpBox
            src={Todo}
            text="Svelte Todo List"
            url="https://todo-list-beta-flax.vercel.app"
            git="https://github.com/ymoose79/todo"
            p='Todo list made in Svelte where user pushes input into an array which is then rendered and can be deleted.' />
          <PopUpBox
            src={airBnbSpoof}
            text="Airbnb Spoof"
            url="https://silver-belekoy-139fa5.netlify.app/"
            git="https://github.com/ymoose79/mern-air-bnb"
            p='MERN stack project.  Functionality is work-in-progress' />
        </div >
      </div >
    </div >
  );
};

export default Portfolio;
