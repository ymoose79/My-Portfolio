import React from "react";
import theOddsApi from "./ImagesPortfolio/theOddsApi.png";
import Todo from "./ImagesPortfolio/Todo.png";
import airBnbSpoof from "./ImagesPortfolio/airBnbSpoof.png";
import ApiCard from "./ImagesPortfolio/ApiCard.png";


import "react-popupbox/dist/react-popupbox.css";
import PopUpBox from "./PopUpBox";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-wrapper" >
      <div className="container">
        <h1 className="text -uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <PopUpBox
            src={theOddsApi}
            text="The Odds Api"
            p=" User selects a Sport and all upcoming games populate with relative gambling information"
            url="https://thirsty-jackson-5c987d.netlify.app"
            git="https://github.com/ymoose79/sports-odds" />
          <PopUpBox
            src={Todo}
            text="Svelte Todo List"
            url="https://todo-list-beta-flax.vercel.app"
            git="https://github.com/ymoose79/todo"
            p='Todo list made in Svelte where user pushes input into an array which is then rendered and can be deleted.' />
          <PopUpBox
            src={ApiCard}
            text="Api Card"
            url="https://velvety-dodol-62c946.netlify.app/"
            git="https://github.com/ymoose79/react-api-card"
            p='REACT Demo project for a job.  Code is currently set to private out of respect to the position.  Link available upon request'
          />
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
