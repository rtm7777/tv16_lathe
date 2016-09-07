import React from 'react';
import {connect} from 'react-redux';
// import {getGearboxConfig, changeThreadType, toggleApprox} from '../../gearbox/gearboxActions';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
// import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

@connect(
	(state) => ({

	}),
	(dispatch) => ({

	})
)
class GearsFilters extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='gears-filters'>
				<p>Filters:</p>
				<Checkbox label='unique gears' style={{width: '25%'}} />
			</div>
		);
	}
}

export default GearsFilters;
