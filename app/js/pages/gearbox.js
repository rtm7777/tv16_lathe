import React from 'react';
import { connect } from 'react-redux';

import GearSelector from '../components/gearbox/gearSelector';
import GearActions from '../components/gearbox/gearActions';
import ThreadsTable from '../components/gearbox/threadsTable';
import GearsConfig from '../components/gearbox/gearsConfig';
import GearsFilters from '../components/gearbox/gearsFilters';

import FontIcon from 'material-ui/FontIcon';
import CircularProgress from 'material-ui/CircularProgress';

@connect(
	(state) => ({
		tableLoader: state.loaderReducer.get('tableLoader'),
		selectorLoader: state.loaderReducer.get('selectorLoader')
	})
)
class Gearbox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let loaderStyle = {
			position: 'absolute',
			height: '50%',
			width: 'calc(100% - 17em)',
			display: 'none',
			alignItems: 'center',
			justifyContent: 'center'
		};
		if (this.props.tableLoader) {
			loaderStyle.display = 'flex';
		};

		return (
			<div className='gearbox'>
				<div className='gear-selector'>
					<div className='gears'>
						<GearSelector/>
					</div>
					<GearActions/>
				</div>
				<div className='gearbox-control'>
					<div className='control-content'>
						<GearsConfig/>
						<GearsFilters/>
					</div>
					<div className='threads-table'>
						<CircularProgress className='loader' style={loaderStyle}/>
						<div className='table'>
							<ThreadsTable/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Gearbox;
