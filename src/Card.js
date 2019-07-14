import React from 'react';

const Card = ({ name, birth_year }) => {
return (
	<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow=5'>
	<h2>{name}</h2>
	<p>{birth_year}</p>
	</div>
	);
}

export default Card;