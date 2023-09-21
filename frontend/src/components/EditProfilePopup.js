import PopupWithForm from "./PopupWithForm";
import React, { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      typeButton="save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-box">
        <input
          name="name"
          id="name-input"
          type="text"
          placeholder="Ваше имя"
          value={name || ""}
          onChange={handleChangeName}
          className="popup__input popup__input_type_name"
          minLength={2}
          maxLength={40}
          required
        />
        <span className="name-input-error popup__text-error" />
        <input
          name="about"
          id="job-input"
          type="text"
          placeholder="Ваш вид деятельности"
          value={description || ""}
          onChange={handleChangeDescription}
          className="popup__input popup__input_type_job"
          minLength={2}
          maxLength={200}
          required
        />
        <span className="job-input-error popup__text-error" />
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
