import React from 'react';
import FontIcon from 'material-ui/FontIcon';

import GearSelector from '../components/gearBox/gearSelector';
import ThreadsTable from '../components/gearBox/threadsTable';

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
				<div className='gearbox-control'>
					<div className='control-content'>
					</div>
					<div className='threads-table'>
						<ThreadsTable/>
					</div>
				</div>
			</div>
		);
	}
}

export default Gearbox;
