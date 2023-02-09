import React from 'react';
import s from '../ArrowDigit.module.css';

export const Digit = props => {
	switch (props.value) {
		case props.currentPage:
			return <div className={s.pageButton} ><span className={s.current}>{props.value}</span></div>
		default:
			return (
				<div className={s.pageButton} >
					<span
						className={s.other}
						title={props.title}
						onClick={() => props.onPageChanged(props.category, props.value)}>{props.value}</span>
				</div>
			)
	}
}