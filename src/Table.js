import React from 'react';
import ReactDOM from 'react-dom';
import { DataTable } from 'react-data-components'
import 'react-data-components/css/table-twbs.css';
import './Table.css';

class Table extends React.Component
{
	renderRows() {
		var districts = this.props.districts;
		var confirmed = this.props.confirmedCases;
		var active = this.props.activeCases;
		var deceased = this.props.deceasedCases;
		var recovered = this.props.recoveredCases;

		var output = [];

		for(var i = 0; i < districts.length; i++) {
			output.push(<TableRow key={i}
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

		const data = [];

		for(let i = 0; i < this.props.districts.length; i++) {	
			data.push({
				id: i,
				district: this.props.districts[i],
				confirmed: this.props.confirmedCases[i],
				active: this.props.activeCases[i],
				deceased: this.props.deceasedCases[i],
				recovered: this.props.recoveredCases[i]
			})
		}



		const tableColumns = [
			{ title: 'District', prop: 'district' },
			{ title: 'Confirmed', prop: 'confirmed' },
			{ title: 'Active', prop: 'active'},
			{ title: 'Deceased', prop: 'deceased' },
			{ title: 'Recovered', prop: 'recovered' }
		]
		
		
		return (
			<DataTable
      className="container"
      keys="id"
      columns={tableColumns}
      initialData={data}
      initialPageLength={5}
      initialSortBy={{ prop: 'district', order: 'ascending' }}
      pageLengthOptions={[ 5, 20, 50 ]}
    />	
		)
	}
}

class TableRow extends React.Component {

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