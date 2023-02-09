import React from 'react';
import s from './Heading.module.css';

export const Heading = props => {
	return (
		<div className={s.heading} >
			<span>{props.heading}</span>
		</div>
	)
}