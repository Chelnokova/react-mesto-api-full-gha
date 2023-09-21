import PopupWithForm from "./PopupWithForm";
import React, { useRef } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      typeButton="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-box">
        <input
          name="link"
          id="link-avatar-input"
          type="url"
          ref={avatarRef}
          placeholder="Ссылка на аватар"
          className="popup__input popup__input_type_link"
          required
        />
        <span className="link-avatar-input-error popup__text-error" />
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
