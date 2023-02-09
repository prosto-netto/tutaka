import React from 'react';
import s from '../ArrowDigit.module.css';


export const Arrow = props => {

	if ((props.index && props.currentPage === props.pagesCount) ||
		(!props.index && props.currentPage === 1)) {
		return <div className={s.pageButton} ><span className={s.arrowDisabled}>{props.caption}</span></div>
	}
	else {
		return (
			<div className={s.pageButton} >
				<span
					className={s.arrowEnabled}
					title={`К странице ${props.currentPage + props.direction}`}
					onClick={() => props.onPageChanged(props.category, props.currentPage + props.direction)}>{props.caption}</span>
			</div>
		)
	}
}