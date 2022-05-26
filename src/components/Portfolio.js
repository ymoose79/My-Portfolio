import React from "react";
import TicTacToe from "./ImagesPortfolio/TicTacToe.png";
import theOddsApi from "./ImagesPortfolio/theOddsApi.png";
import pcb from "./ImagesPortfolio/pcb.png";
import Todo from "./ImagesPortfolio/Todo.png";
import airBnbSpoof from "./ImagesPortfolio/airBnbSpoof.png";


//  react popup box
import { PopupboxContainer, PopupboxManager } from "react-popupbox";

// grabbed from Node folder, opened up react popupbox then imported the css from destination file
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //  Tic Tac Toe
  // Probably gotta do this for all other portfolios

  const openPopupboxTicTacToe = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={TicTacToe}
          alt="Tic Tac Toe... "
        />
        <p>
          Basic Tic-Tac-Toe with modules and where Player 1 gets to choose "O"s
          or "X"s
        </p>
        <b>GitHub: </b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/ymoose79/tic-tac-toe"
          onClick={() => window.open("https://github.com/ymoose79/tic-tac-toe")}
        >
          https://github.com/ymoose79/tic-tac-toe
        </a>
        <br></br>
        <b>Live: </b>{" "}
        <a
          className="hyper-link"
          href="https://heuristic-thompson-b85607.netlify.app"
          onClick={() =>
            window.open("https://heuristic-thompson-b85607.netlify.app")
          }
        >
          https://heuristic-thompson-b85607.netlify.app
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupTheOdds = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={theOddsApi}
          alt="the-odds-api "
        />
        <p>
          User selects a Sport and all upcoming games populate with relative
          gambling information
        </p>
        <b>GitHub: </b>{" "}
        <a
          className="hyper-link"
          href="#https://github.com/ymoose79/sports-odds"
          onClick={() => window.open("https://github.com/ymoose79/sports-odds")}
        >
          https://github.com/ymoose79/sports-odds
        </a>
        <br></br>
        <b>Live: </b>{" "}
        <a
          className="hyper-link"
          href="https://thirsty-jackson-5c987d.netlify.app"
          onClick={() =>
            window.open("https://thirsty-jackson-5c987d.netlify.app")
          }
        >
          https://thirsty-jackson-5c987d.netlify.app
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupPCB = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={pcb}
          alt="pre-coding bootcamp"
        />
        <p>
          Wordpress site to help potential coding bootcamp students get prepared
        </p>
        <b>Live: </b>{" "}
        <a
          className="hyper-link"
          href="https://pre-codingbootcamp.com"
          onClick={() => window.open("https://pre-codingbootcamp.com")}
        >
          https://pre-codingbootcamp.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupboxTodo = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={Todo} alt="Todo... " />
        <p>
          Todo list made in Svelte where user pushes input into an array which
          is then rendered and can be deleted.
        </p>
        <b>GitHub: </b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/ymoose79/todo"
          onClick={() => window.open("https://github.com/ymoose79/todo")}
        >
          https://github.com/ymoose79/todo
        </a>
        <br></br>
        <b>Live: </b>{" "}
        <a
          className="hyper-link"
          href="https://todo-list-beta-flax.vercel.app"
          onClick={() => window.open("https://todo-list-beta-flax.vercel.app")}
        >
          https://todo-list-beta-flax.vercel.app
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const openPopupboxAirBnb = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={airBnbSpoof}
          alt="Air Bnb "
        />
        <p>
          MERN stack Air Bnb spoof in development.  Currently, only GET functionality working
        </p>
        <b>GitHub: </b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/ymoose79/mern-air-bnb"
          onClick={() => window.open("https://github.com/ymoose79/mern-air-bnb")}
        >
          https://github.com/ymoose79/mern-air-bnb
        </a>
        <br></br>
        <b>Live: </b>{" "}
        <a
          className="hyper-link"
          href="https://silver-belekoy-139fa5.netlify.app"
          onClick={() =>
            window.open("https://silver-belekoy-139fa5.netlify.app")
          }
        >
          https://silver-belekoy-139fa5.netlify.app
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTicTacToe = {
    titleBar: {
      enable: true,
      text: "TicTacToe",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const popupboxConfigTheOdds = {
    titleBar: {
      enable: true,
      text: "The Odds (API)",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const popupboxConfigPCB = {
    titleBar: {
      enable: true,
      text: "Pre-Coding Bootcamp",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const popupboxConfigTodo = {
    //  baked in elements for styling:
    titleBar: {
      enable: true,
      text: "Todo List",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const popupboxConfigAirBnb = {
    //  baked in elements for styling:
    titleBar: {
      enable: true,
      text: "Airbnb Spoof",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text -uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxTicTacToe}>
            <img
              className="portfolio-image"
              src={TicTacToe}
              alt="tic tac toe"
            />
            <div className="overflow"></div>
          </div>
          {/*  */}
          <div className="portfolio-image-box" onClick={openPopupTheOdds}>
            <img
              className="portfolio-image"
              src={theOddsApi}
              alt="the-odds-api"
            />
            <div className="overflow"></div>
          </div>
          {/*  */}
          <div className="portfolio-image-box" onClick={openPopupboxTodo}>
            <img className="portfolio-image" src={Todo} alt="Todo-list" />
            <div className="overflow"></div>
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxAirBnb}>
            <img className="portfolio-image" src={airBnbSpoof} alt="Airbnb" />
            <div className="overflow"></div>
          </div>
          <div className="portfolio-image-box" onClick={openPopupPCB}>
            <img
              className="portfolio-image"
              src={pcb}
              alt="pre-coding bootcamp"
            />
            <div className="overflow"></div>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigTicTacToe} />
      <PopupboxContainer {...popupboxConfigTheOdds} />
      <PopupboxContainer {...popupboxConfigTodo} />
      <PopupboxContainer {...popupboxConfigPCB} />
      <PopupboxContainer {...popupboxConfigAirBnb} />
    </div>
  );
};

export default Portfolio;
