import React from 'react'


const Card = ({title, className, icon, eventHandler, description,  buttonTitle, onButtonClick }) => {
  return (
    <div className={`card ${className}`} onClick={eventHandler}>
    <div className="card-body">
    <div className="card-icon" style={{ color: '-gray', fontSize: '50px' }}>
          {icon}
        </div>
      <h5 className="card-title">{title}</h5>
      <p>{description}</p>
      <button onClick={onButtonClick} className="btn btn-primary">
        {buttonTitle}
      </button>
    </div>
  </div>
  );
};

export default Card