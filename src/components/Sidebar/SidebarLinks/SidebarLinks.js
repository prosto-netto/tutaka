import React from 'react';
import { connect } from 'react-redux';
import { initContentPage } from '../../../redux/content_reducer';
import { setActiveLink } from '../../../redux/sidebar_reducer';
import s from './SidebarLinks.module.css'

class SidebarLinks extends React.Component {

	onLinkChanged = (category, linkID) => {
		this.props.setActiveLink(linkID)
		this.props.initContentPage(category)
	}

	render() {

		if (this.props.links) {
			return (
				this.props.links.map(link => {
					if (link.id === this.props.activeLink) {
						return (
							<div className={s.sblink} key={link.id}>
								<span className={s.active} >{link.caption}</span>
							</div>
						)
					}
					return (
						<div className={s.sblink} key={link.id}>
							<span className={s.regular} onClick={() => this.onLinkChanged(link.category, link.id)}>{link.caption}</span>
						</div>
					)
				})
			)
		}
	}
}

const mapStateToProps = state => ({
	links: state.sidebar.links,
	activeLink: state.sidebar.activeLink
})



export default connect(mapStateToProps, { setActiveLink, initContentPage })(SidebarLinks)