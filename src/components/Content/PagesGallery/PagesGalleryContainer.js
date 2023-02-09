import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setPagesGallery } from '../../../redux/sidebar_reducer';
import { PagesGallery } from './PagesGallery'


class PagesGalleryContainer extends React.Component {

	onPageChanged = page => {
		this.props.setCurrentPage(page)
		this.props.setPagesGallery(this.props.pagesCount)
	}

	render() {
		return (
			<PagesGallery
				onPageChanged={this.onPageChanged}
				pagesGallery={this.props.pagesGallery}
				currentPage={this.props.currentPage}
				pagesCount={this.props.pagesCount} />)
	}
}

const mapStateToProps = state => (
	{
		pagesGallery: state.sidebar.pagesGallery,
		currentPage: state.sidebar.currentPage,
		pagesCount: state.sidebar.pagesCount
	}
)

export default connect(mapStateToProps, { setCurrentPage, setPagesGallery })(PagesGalleryContainer)