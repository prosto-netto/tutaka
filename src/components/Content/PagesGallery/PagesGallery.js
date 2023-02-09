import React from 'react';
import { Arrow } from './Arrow/Arrow';
import { Digit } from './Digit/Digit';
import s from './PagesGallery.module.css';

export const PagesGallery = props => {
	return (
		<div className={`${s.pagesGallery}`}>
			{
				props.pagesGallery.map((value, index) => {
					switch (value) {
						case 0:
							return (
								<Arrow
									category={props.category}
									caption={String.fromCodePoint(index ? 0x2193 : 0x2191)}
									direction={index ? 1 : -1}
									onPageChanged={props.onPageChanged}
									currentPage={props.currentPage}
									pagesCount={props.pagesCount}
									key={index}
									index={index} />
							)
						default:
							return (
								<Digit
									category={props.category}
									value={value}
									onPageChanged={props.onPageChanged}
									currentPage={props.currentPage}
									pagesCount={props.pagesCount}
									title={props.pageButtonTitles[value - 1]}
									key={index} />
							)
					}
				})
			}
		</div>
	)
}