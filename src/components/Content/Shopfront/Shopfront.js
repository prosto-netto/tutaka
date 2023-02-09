import React from 'react';
import s from './Shopfront.module.css';

export const Shopfront = props => {
	return (
		<div className={s.shopfront}>
			<div className={s.title}>
				<span>{props.title}</span>
			</div>
			<div className={s.imgblock} >
				<img src={props.photo} alt="roll" className={s.img} />
			</div>
			<div className={s.total}>
				<span>{props.weight} г</span>
			</div>
		</div>
	)
}