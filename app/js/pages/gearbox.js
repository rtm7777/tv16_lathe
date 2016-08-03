import React from 'react';
import { Link } from 'react-router';

class GearBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Link to="/documentation/">passport</Link>
				gears
			</div>
		);
	}
}

export default GearBox;
