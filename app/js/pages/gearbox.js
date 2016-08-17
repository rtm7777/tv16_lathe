import React from 'react';
import FontIcon from 'material-ui/FontIcon';

import GearSelector from '../components/gearBox/gearSelector';

class Gearbox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='gearbox'>
				<div className='gear-selector'>
					<GearSelector/>
				</div>
				<div>
				</div>
			</div>
		);
	}
}

export default Gearbox;
