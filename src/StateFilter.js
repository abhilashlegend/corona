import React from 'react';



class StateFilter extends React.Component {
	constructor(props) {
		super(props);

		var states = [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Delhi',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Goa',
    'Gujarat',
    'Himachal Pradesh',
    'Haryana',
    'Jharkhand',
    'Jammu and Kashmir',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Lakshadweep',
    'Maharashtra',
    'Meghalaya',
    'Manipur',
    'Madhya Pradesh',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Puducherry',
    'Rajasthan',
    'Sikkim',
    'Telangana',
    'Tamil Nadu',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
]

		this.state = {
			states,
		}      

	}

    componentDidMount() {
      
    }

	render() {

		return (
			<div className="form">
				<form>
					<div className="form-group row">
						<label className="col-sm-3 col-form-label" htmlFor="state">State :</label>
				     	<div className="col-sm-9">
					    	<select id="state" name="state" defaultValue={this.props.defaultState} onChange={this.props.changeState} className="form-control">
								{ this.state.states.map(val => 
									<option key={val} value={val}>{val}</option>)
								}
					    	</select>
					   </div>
					</div>                  
				</form>
			</div>	
		);
	}
}

export default StateFilter;