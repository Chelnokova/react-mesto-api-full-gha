import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({
  card,
  onCardClick,
  handleDeleteClick,
  onCardLike,
  onCardDelete,
}) {
  const userData = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === userData._id;
  const isLiked = card.likes.some((i) => i._id === userData._id);
  const cardLikeButtonClassName = `elements__like ${
    isLiked && "elements__like_checked"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="elements__card">
      {isOwn && (
        <button
          className="elements__basket"
          onClick={handleDeleteClick}
          type="button"
        />
      )}
      <div
        style={{ backgroundImage: `url(${card.link})` }}
        className="elements__img"
        onClick={handleClick}
      ></div>
      <article className="elements__descr">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like-block">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <p className="element__amount-like">{card.likes.length}</p>
        </div>
      </article>
    </li>
  );
}

export default Card;
