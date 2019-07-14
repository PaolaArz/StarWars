import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {
	return  (
		<div>
			{
				people.map((person, i) => {
					return ( 
						<Card 
							name={people[i].name} 
							birth_year={people[i].birth_year}
						/>
						)
				})
		}
		</div>
	);
}

export default CardList;