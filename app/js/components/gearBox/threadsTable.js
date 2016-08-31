import React from 'react';
import { connect } from 'react-redux';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

@connect(
	state => ({})
)
class ThreadsTable extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const lala = [];
		const colStyle = {
			height: '25px',
			textAlign: 'center'
		};
		const gearColStyle = {
			width: '25px',
			height: '25px',
			textAlign: 'center'
		};
		for (var i = 100; i >= 0; i--) {
			lala.push(
				<TableRow key={i} style={{height: '25px'}}>
					<TableRowColumn style={gearColStyle}>20</TableRowColumn>
					<TableRowColumn style={gearColStyle}>75</TableRowColumn>
					<TableRowColumn style={gearColStyle}>20</TableRowColumn>
					<TableRowColumn style={gearColStyle}>100</TableRowColumn>
					<TableRowColumn style={colStyle}>0.008</TableRowColumn>
					<TableRowColumn style={colStyle}>0.1600</TableRowColumn>
					<TableRowColumn style={colStyle}>158.750</TableRowColumn>
				</TableRow>
			);
		}

		return (
			<Table fixedHeader selectable={false} style={{height: '100%'}}>
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
				<TableBody displayRowCheckbox={false}>
					{lala}
				</TableBody>
			</Table>
		);
	}
}

export default ThreadsTable;
