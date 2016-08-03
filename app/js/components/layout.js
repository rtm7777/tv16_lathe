import React from 'react';
import LeftNavigation from './leftNavigation';
import AppBar from 'material-ui/AppBar';

class Layout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<LeftNavigation/>
				<AppBar title="Title"/>
				{this.props.children}
			</div>
		);
	}
}

export default Layout;
