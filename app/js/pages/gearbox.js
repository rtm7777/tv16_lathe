import React from 'react';
import FontIcon from 'material-ui/FontIcon';

import GearSelector from '../components/gearbox/gearSelector';
import ThreadsTable from '../components/gearbox/threadsTable';
import GearsConfig from '../components/gearbox/gearsConfig';
import GearsFilters from '../components/gearbox/gearsFilters';

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
						<GearsConfig/>
						<GearsFilters/>
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
