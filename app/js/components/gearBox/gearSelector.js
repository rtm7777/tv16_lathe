import React from 'react';
import {connect} from 'react-redux';

import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';

import {metricGears, imperialGears} from '../../gearBox/gearboxConfig';

@connect(
	state => ({})
)
class GearSelector extends React.Component {
	constructor(props) {
		super(props);
	}

	onClick(e) {
		e.preventDefault();
		console.log(e);
	}

	render() {
		const customGears = [34, 32];
		const metricGearsItems = metricGears.map((gear, i) => {
			return <ListItem key={i} primaryText={`z = ${gear}`} leftCheckbox={<Checkbox />} />;
		});
		const imperialGearsItems = imperialGears.map((gear, i) => {
			return <ListItem key={i} primaryText={`z = ${gear}`} leftCheckbox={<Checkbox />} />;
		});
		const customGearsItems = customGears.map((gear, i) => {
			const itemProps = {
				key: i,
				primaryText: `z = ${gear}`,
				leftCheckbox: <Checkbox />,
			};
			return <ListItem {...itemProps} />;
		});

		return (
			<List>
				<Subheader>Gears</Subheader>
				<ListItem
					primaryText="Metric gears"
					leftIcon={<FontIcon className={`fa fa-cogs`} />}
					primaryTogglesNestedList
					nestedItems={metricGearsItems}
				/>
				<ListItem
					primaryText="Imperial gears"
					leftIcon={<FontIcon className={`fa fa-cogs`} />}
					primaryTogglesNestedList
					nestedItems={imperialGearsItems}
				/>
				<ListItem
					primaryText="Custom gears"
					leftIcon={<FontIcon className={`fa fa-cogs`} />}
					initiallyOpen
					primaryTogglesNestedList
					nestedItems={customGearsItems}
				/>
			</List>
		);
	}
}

export default GearSelector;
