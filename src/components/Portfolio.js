import React from "react";
import theOddsApi from "./ImagesPortfolio/theOddsApi.png";
import Todo from "./ImagesPortfolio/Todo.png";
import TicTacToe from "./ImagesPortfolio/TicTacToe.png"
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
            text="Api Card"
            url="https://heuristic-thompson-b85607.netlify.app/"
            git="https://github.com/ymoose79/tic-tac-toe"
            p='Placeholder until I can figure out what is goin on with vercel on a different project. Pure Vanilla JS, 1st project, I never did make it mobile friendly.'
          />
          <PopUpBox
            src={theOddsApi}
            text="The Odds Api"
            p="Vanilla JS dropdown that access API and dynamicaly populates cards"
            url="https://thirsty-jackson-5c987d.netlify.app"
            git="https://github.com/ymoose79/sports-odds" />
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
