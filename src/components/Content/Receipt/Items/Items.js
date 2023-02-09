import React from 'react';
import s from './Items.module.css';

export const Items = props => {
	return (
		props.products.map(product => {

			return (
				<div className={s.item} key={product.id} >
					<span className={s.product}>{product.type}</span>
					<span className={s.space} />
					<span className={s.weight}>{product.weight}</span>
				</div>
			)
		})
	)
}


