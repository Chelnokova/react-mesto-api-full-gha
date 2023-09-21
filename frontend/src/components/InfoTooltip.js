function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_tooltip">
        <button
          className="popup__btn-close"
          type="button"
          onClick={props.onClose}
        />
        <img className="popup__icon" src={props.icon} />
        <h2 className="popup__info">{props.text}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
