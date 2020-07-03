import React from 'react';
import { Bar } from 'react-chartjs-2'; 

class BarChart extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props.districts);
	}

	render() {
		return (
			<Bar data={{
				labels: this.props.districts,
				datasets: [{
		            label: 'Confirmed',
		            data: this.props.confirmedCases,
		            backgroundColor: this.props.confirmedBgColor,
		            borderWidth: 1
		        },
		     	 {
		          label: 'Active',
		            data: this.props.activeCases,
		            backgroundColor: this.props.activeBgColor,
		            borderWidth: 1   
		        },
		        {
		          label: 'Deceased',
		            data: this.props.deceasedCases,
		            backgroundColor: this.props.deceasedBgColor,
		            borderWidth: 1   
		        },
		        {
		            label: 'Recovered',
		            data: this.props.recoveredCases,
		            backgroundColor: this.props.recoveredBgColor,
		            borderWidth: 1   
		        }     	

		        ],
			}}
			option={{
				maintainAspectRatio: false,
				scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }]
		        },
		        responsive: true,
			}}
			/>
		);
	}
}

export default BarChart;