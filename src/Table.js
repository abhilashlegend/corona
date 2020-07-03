import React from 'react';
import ReactDOM from 'react-dom'


class Table extends React.Component
{
	constructor(props) {
		super(props);
		this.renderRows = this.renderRows.bind(this);
		
	}

	renderRows() {
		var districts = this.props.districts;
		var confirmed = this.props.confirmedCases;
		var active = this.props.activeCases;
		var deceased = this.props.deceasedCases;
		var recovered = this.props.recoveredCases;

		var output = [];

		for(var i = 0; i < districts.length; i++) {
			output.push(<TableRow 
				district={districts[i]}
				confirmed={confirmed[i]}
				active={active[i]}
				deceased={deceased[i]}
				recovered={recovered[i]}
			/>)			 
		}

		return output;
		
	}

	render() {
		
		
		return (
			<div className="table-responsive">
				<table className="table table-hover">
				  <thead className="thead-dark">
				    <tr>
				      <th scope="col">District</th>
				      <th scope="col">Confirmed</th>
				      <th scope="col">Active</th>
				      <th scope="col">Deceased</th>
				      <th scope="col">Recovered</th>
				    </tr>
				  </thead>
				  <tbody>
				  	{this.renderRows() }
				  </tbody>
				</table>  

			</div>		
		)
	}
}

class TableRow extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<tr>
						<td> {this.props.district} </td>
						<td> { this.props.confirmed } </td>
						<td> { this.props.active } </td>
						<td> { this.props.deceased } </td>
						<td> { this.props.recovered } </td>
					</tr>
		)
	}
}

export default Table;