import React from 'react';
import './Card.css';

const InformationCard = (props) =>{
	const {name, id, image} = props;
	return (
		<div className="CardWrapper" key={id}>
			<img className="CardImage" src={image} alt={`${name}`} />
			<div>{name}</div>
		</div>
	)
};

export default InformationCard;