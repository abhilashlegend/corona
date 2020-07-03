import React from 'react';



class DistrictFilter extends React.Component {
	constructor(props) {
		super(props);

		

		this.state = {
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
					
                    { this.renderDistrictSelect() }
                    
				</form>
			</div>	
		);
	}
}

export default DistrictFilter;