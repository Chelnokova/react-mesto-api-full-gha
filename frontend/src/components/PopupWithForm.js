function PopupWithForm({
  name,
  title,
  typeButton,
  textButton,
  isOpen,
  onClose,
  onSubmit,
  ...props
}) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <button className="popup__btn-close" type="button" onClick={onClose} />
        <form
          action="#"
          name={`${name}`}
          className={`popup__form popup__form_type_${name}`}
          onSubmit={onSubmit}
        >
          {props.children}
          <button
            className="popup__btn-form popup__btn-form_type_${typeButton}"
            type="submit"
          >
            {textButton || "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
