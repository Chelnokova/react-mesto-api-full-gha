import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function hundleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: name,
      link: link,
    });
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      textButton="Создать"
      typeButton="create"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={hundleSubmit}
    >
      <div className="popup__input-box">
        <input
          name="name"
          id="title-input"
          type="text"
          value={name || ""}
          onChange={handleChangeName}
          placeholder="Название"
          className="popup__input popup__input_type_title"
          minLength={2}
          maxLength={40}
          required
        />
        <span className="title-input-error popup__text-error" />
        <input
          name="link"
          id="link-input"
          type="url"
          value={link || ""}
          onChange={handleChangeLink}
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_link"
          required
        />
        <span className="link-input-error popup__text-error" />
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
