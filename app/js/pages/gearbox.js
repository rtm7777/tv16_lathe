import React from 'react';
import FontIcon from 'material-ui/FontIcon';

class GearBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<FontIcon className="fa fa-cogs"/>
				gears
			</div>
		);
	}
}

export default GearBox;
