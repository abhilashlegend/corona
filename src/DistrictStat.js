import React from 'react';

class DistrictStat extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
			<div className="col-sm-2">
				<div className="counter-box confirmed" title="Confirmed">
					<div id="district_confirmed_cases">{this.props.confirmed}</div>
				</div>
			</div>	

			<div className="col-sm-2">
				<div className="counter-box active-case" title="Active">
					<div id="district_active_cases">{this.props.active}</div>
				</div>
			</div>

			<div className="col-sm-2">
				<div className="counter-box deceased" title="Deceased">
					<div id="district_deceased_cases">{this.props.deceased}</div>
				</div>
			</div>

			<div className="col-sm-2">
				<div className="counter-box recovered" title="Recovered">
					<div id="district_recovered_cases">{this.props.recovered}</div>
				</div>
			</div>
			</>
		);
	}
}

export default DistrictStat;