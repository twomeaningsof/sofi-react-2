import { useState } from "react";
import { ifElse, always } from "ramda";
import CardContext from "../../context/CardContext";
import "./Card.scss";

const Card = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const handleHidden = ifElse(
    always(hidden === true),
    () => setHidden(false),
    () => setHidden(true)
  );

  return (
    <article className="card">
      <div className="card__image"></div>
      <div className="card__content">
        <CardContext.Provider value={{ hidden, handleHidden }}>
          {children}
        </CardContext.Provider>
      </div>
    </article>
  );
};

export default Card;
