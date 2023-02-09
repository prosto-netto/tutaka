import React from 'react';
import { connect } from 'react-redux';
import { getRoll } from '../../redux/content_reducer';
import s from './Content.module.css';
import { PagesGallery } from './PagesGallery/PagesGallery';
import { Receipt } from './Receipt/Receipt';
import { Shopfront } from './Shopfront/Shopfront';


class Content extends React.Component {
	onPageChanged = (category, pageNumber) => {
		this.props.getRoll(category, pageNumber)
	}

	render() {
		if (this.props.roll) {
			let { roll, ...gallery } = this.props
			delete gallery.getRoll
			gallery.onPageChanged = this.onPageChanged
			let { title, picture: photo, total: weight, ...receipt } = roll
			return (
				<div className={s.wrapper}>
					<div className={s.roll} >
						<Shopfront {...{ title, photo, weight }} />
						<Receipt {...receipt} />
					</div>
					<div className={s.paginator}>
						<PagesGallery {...gallery} />
					</div>
				</div>
			)
		}

	}
}

const mapStateToProps = state => {
	return { ...state.content }
}


export default connect(mapStateToProps, { getRoll })(Content)