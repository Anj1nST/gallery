import React from "react";
import "./styles.scss";
import Card from "../Card";
import Typography from "../Typogpaphy";
import { ICard } from "../Card/types";
import { IGallery } from "./types";

const Gallery: React.FC<IGallery> = ({ title = "Title", cards }) => {
  return (
    <div className="galleryContainer">
      <div className="titleContainer">
        <Typography>
          <h1>{title}</h1>
        </Typography>
      </div>
      <div className="cardsContainer">
        {cards.map((card: ICard) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
