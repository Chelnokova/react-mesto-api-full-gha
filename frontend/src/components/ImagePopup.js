function ImagePopup({card, onClose}) {
	return (
		<div className={`popup popup_type_view ${card ? "popup_opened" : ""}`}>
			<div className="popup__page">
				<button className="popup__btn-close" type="button" onClick={onClose} />
				<img
				src={card?.link}
				alt={card?.name}
				className="popup__image" />
				<h2 className="popup__heading">{card?.name}</h2>
			</div>
		</div>
	)
}

export default ImagePopup;