import React from 'react';
import { connect } from 'react-redux';
import { getLinks } from '../../redux/sidebar_reducer';
import s from './Sidebar.module.css';
import SidebarLinks from './SidebarLinks/SidebarLinks';

class Sidebar extends React.Component {
	componentDidMount() {
		this.props.getLinks()
	}

	render() {
		return (
			<div className={s.wrapper} >
				<div className={s.sidebar} >
					<SidebarLinks />
				</div>
			</div>

		)
	}
}

const mapStateToProps = state => ({ sidebar: state.sidebar })

export default connect(mapStateToProps, { getLinks })(Sidebar)