import Card from "./Card";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const userDate = React.useContext(CurrentUserContext);
  return (
    <main className="main">
      <section className="profile">
        <button className="profile__btn-avatar" onClick={onEditAvatar}>
          <div
            style={{ backgroundImage: `url(${userDate.avatar})` }}
            className="profile__avatar"
          ></div>
        </button>
        <div className="profile__container">
          <div className="profile__info">
            <h1 className="profile__name">{userDate.name}</h1>
            <p className="profile__job">{userDate.about}</p>
          </div>
          <button
            className="profile__btn-edit"
            type="button"
            onClick={onEditProfile}
          />
        </div>
        <button
          className="profile__btn-add"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <ul className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
