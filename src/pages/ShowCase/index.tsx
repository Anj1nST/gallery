import React from "react";
import "./styles.scss";
import Gallery from "../../components/Gallery";
import { useAppSelector } from "../../store/hooks";

const ShowCase: React.FC = () => {
  const galleries = useAppSelector((state) => state.showcase.galleries)
  return (
    <div className="showCaseContainer">
      {galleries.map((gallery: any) => {
        return (
          <Gallery
            key={gallery.title}
            title={gallery.title}
            cards={gallery.cards}
          />
        );
      })}
    </div>
  );
};

export default ShowCase;
