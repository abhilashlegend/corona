import React from 'react';



class Filter extends React.Component {
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
            districtSelected: "Dharwad",	
            districts: []
		}

        this.changeDistrict = this.changeDistrict.bind(this);
       // this.changeState = this.changeState.bind(this);

	}

    componentDidMount() {
       this.setState({ districts: this.props.districts })
    }

    changeDistrict(e) {
        this.setState({
  districtSelected: e.target.value
},function(){
  console.log(this.state.districtSelected)
})
    }


    changeState() {

    }

    renderDistrictSelect() {
        if(this.props.defaultDistrict) {
            return (
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label" htmlFor="district">District :</label>
                        <div className="col-sm-9">

                            <select id="district" name="district" value={this.props.defaultDistrict} onChange={this.props.changeState} className="form-control">
                                {this.props.districts.map(val =>
                                    <option key={val} value={val}>{val}</option>)
                                }                               
                            </select>
                         </div>
                                
                                
                    </div>
              );
        } else {
            return (
                <div className="form-group row">
                        <label className="col-sm-3 col-form-label" htmlFor="district">District :</label>
                        <div className="col-sm-9">

                            <select id="district" name="district" value={this.props.defaultDistrict} onChange={this.props.changeState} className="form-control">
                                {this.props.districts.map(val =>
                                    <option key={val} value={val}>{val}</option>)
                                }                               
                            </select>
                         </div>
                                
                                
                    </div>

                );
        }
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
                    { this.renderDistrictSelect() }
                    
				</form>
			</div>	
		);
	}
}

export default Filter;