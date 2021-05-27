import React from 'react';
import './index.scss';

const PopUp = ({popUpTitle, imgSrc, closePopUp}): React.ReactElement => {
    return (
        <div className="popup__container">
            <div className="popup__container__content">
                <h3>{popUpTitle}</h3>
                <p>Something went wrong, please try again later</p>
                <div className="popup__container__img__wrapper">
                    <img src={imgSrc} />
                </div>
                <button className="popup__container__button" 
                    onClick={ () => closePopUp() }> Close
                </button>
            </div>
        </div>
    );

}

export default PopUp;