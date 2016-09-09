import React from 'react';
import { connect } from 'react-redux';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

@connect(
	state => ({
		config: state.gearboxReducer.get('config'),
		uniqueGearsChecked: state.gearboxFiltersReducer.get('uniqueGearsChecked')
	})
)
class ThreadsTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			config: []
		};
	}

	filterConfig = () => {
		if (this.props.uniqueGearsChecked) {
			return this.props.config.filter((value) => { return value.a !== value.b && value.a !== value.c && value.b !== value.c; });
		}
		return this.props.config;
	}

	render() {
		const colStyle = {
			height: '25px',
			textAlign: 'center'
		};
		const gearColStyle = {
			width: '25px',
			height: '25px',
			textAlign: 'center'
		};
		const rows = this.filterConfig().map((row, i) => {
			return (
				<TableRow key={i} style={{height: '25px'}}>
					<TableRowColumn style={gearColStyle}>{row.a}</TableRowColumn>
					<TableRowColumn style={gearColStyle}>{row.b}</TableRowColumn>
					<TableRowColumn style={gearColStyle}>{row.c}</TableRowColumn>
					<TableRowColumn style={gearColStyle}>{row.d}</TableRowColumn>
					<TableRowColumn style={colStyle}>{row.feed}</TableRowColumn>
					<TableRowColumn style={colStyle}>{row.pmm}</TableRowColumn>
					<TableRowColumn style={colStyle}>{row.tpi}</TableRowColumn>
				</TableRow>
			);
		});

		return (
			<Table fixedHeader selectable={false} style={{height: 'initial'}}>
				<TableHeader adjustForCheckbox={false} displaySelectAll={false}>
					<TableRow>
						<TableHeaderColumn style={gearColStyle}>a</TableHeaderColumn>
						<TableHeaderColumn style={gearColStyle}>b</TableHeaderColumn>
						<TableHeaderColumn style={gearColStyle}>c</TableHeaderColumn>
						<TableHeaderColumn style={gearColStyle}>d</TableHeaderColumn>
						<TableHeaderColumn style={colStyle}>feed</TableHeaderColumn>
						<TableHeaderColumn style={colStyle}>pitch / mm</TableHeaderColumn>
						<TableHeaderColumn style={colStyle}>tpi</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody displayRowCheckbox={false} className='table-body'>
					{rows}
				</TableBody>
			</Table>
		);
	}
}

export default ThreadsTable;
