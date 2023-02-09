import React from 'react';
import s from './Receipt.module.css';
import { Heading } from './Heading/Heading';
import { Items } from './Items/Items';

export const Receipt = props => {
	return (
		<div className={s.wrapper} >
			{
				props.headings.map((heading, index) => {
					return (
						<div className={s.part} key={heading.id} >
							<Heading heading={heading.title} />
							<Items products={props.products[index]} />
						</div>
					)
				})
			}
		</div>
	)
}