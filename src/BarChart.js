import React from 'react';
import { Bar } from 'react-chartjs-2'; 

class BarChart extends React.Component {

	renderGraph() {
		var mobileview = false;

		if(window.innerWidth <= 414) {
			mobileview = true;
		} else {
			mobileview = false;
		}


		if(mobileview) {
			return (
				<Bar  data={{
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
			height={400}
			option={{
				maintainAspectRatio: false,
				id: "myChart",
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
		} else {
			return (
			<Bar  data={{
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
		            borderWidth: 3   
		        }     	

		        ],
			}}
			height={100}
			option={{
				maintainAspectRatio: false,
				id: "myChart",
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

	render() {
		return (
			<div>
				{this.renderGraph()}
			</div>
		);
	}
}

export default BarChart;