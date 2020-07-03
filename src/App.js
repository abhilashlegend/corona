import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateFilter from './StateFilter';
import DistrictFilter from './DistrictFilter';
import Filter from './Filter';
import IndiaStat from './IndiaStat';
import StateStat from './StateStat';
import DistrictStat from './DistrictStat'; 
import BarChart from './BarChart';
import Table from './Table';
import axios from 'axios';

class App extends React.Component {
  render() {
    return (
          <div className="App">
            <header className="App-header">

                <img src="virus.png" className="App-logo" alt="virus" /> 
                <p className="App-header-text">Coronavirus Tracker</p>
            </header>
            <Content />
            <footer className="footer">
              <div className="container">
                <span>Made by <a href="https://abhilashwebdeveloper.com">Abhilash Narayan</a></span>
              </div>
            </footer>
           </div>
      )
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      districts: [],
      districtsData: [],
      defaultState : "Karnataka",
      defaultDistrict: "Dharwad",
      districtConfirmedCases: 0,
      districtActiveCases: 0,
      districtDeceasedCases: 0,
      districtRecoveredCases: 0,
      confirmedCases: 0,
      confirmedBgColor: [],
      activeCases: 0,
      activeBgColor: [],
      deceasedCases: 0,
      deceasedBgColor: [],
      recoveredCases: 0,
      recoveredBgColor: [],  
      indiaTotalConfirmedCases: 0,
      indiaTotalActiveCases: 0,
      indiaTotalDeceasedCases: 0,
      indiaTotalRecoveredCases: 0,
      stateTotalConfirmedCases: 0,
      stateTotalActiveCases: 0,
      stateTotalDeceasedCases: 0,
      stateTotalRecoveredCases: 0
    }

    this.changeState = this.changeState.bind(this);
  }

  changeState(e) {
    var state;
     if(e.target.name == "state") {
       state = e.target.value
        this.setState({ defaultState: state, defaultDistrict: '' });
      }
      else if(e.target.name == "district"){
        this.setState({ defaultState: this.state.defaultState, defaultDistrict: e.target.value })
      }
      else {
        this.setState({ defaultState: this.state.defaultState,
          defaultDistrict: this.state.defaultDistrict
        })
      }
   
    this.getDataFromApi();
  }

  getDataForIndia() {
      const url = 'https://api.rootnet.in/covid19-in/stats/latest';
      axios.get(url).then(response => response.data)
      .then((data) => {
        var indiaConfirmed = data.data.summary.total;
        var indiaDeceased = data.data.summary.deaths;
        var indiaRecovered = data.data.summary.discharged;
        var indiaActive = indiaConfirmed - indiaRecovered - indiaDeceased;

        this.setState({ 
          indiaTotalConfirmedCases:  indiaConfirmed,
          indiaTotalActiveCases: indiaActive,
          indiaTotalDeceasedCases: indiaDeceased,
          indiaTotalRecoveredCases: indiaRecovered
        })
      });
  }


  getDataFromApi() {
      const url = 'https://api.covid19india.org/state_district_wise.json';
      axios.get(url).then(response => response.data)
      .then((data) => {
        var dData = data[this.state.defaultState]["districtData"];
        var districtsConfirmedCases = [];
        var districtsConfirmedBgColor = [];
        var districtsActiveCases = [];
        var districtsActiveBgColor = [];
        var districtsDeceasedCases = [];
        var districtsDeceasedBgColor = [];
        var districtsRecoveredCases = [];
        var districtsRecoveredBgColor = [];

        var dists = [];
        if(this.state.defaultDistrict != '') {
         
            var confirmedCases = data[this.state.defaultState]["districtData"][this.state.defaultDistrict]["confirmed"];
            var activeCases = data[this.state.defaultState]["districtData"][this.state.defaultDistrict]["active"];
            var deceasedCases = data[this.state.defaultState]["districtData"][this.state.defaultDistrict]["deceased"];
            var recoveredCases = data[this.state.defaultState]["districtData"][this.state.defaultDistrict]["recovered"];

            
        } else {
           var districtSelect = document.getElementById("district");
             console.log(districtSelect.value);
           /*
           this.setState({ defaultDistrict: districtSelect.value})
            var confirmedCases = data[this.state.defaultState]["districtData"][this.state.defaultDistrict]["confirmed"];
            var activeCases = data[this.state.defaultState]["districtData"][this.state.defaultDistrict]["active"];
            var deceasedCases = data[this.state.defaultState]["districtData"][this.state.defaultDistrict]["deceased"];
            var recoveredCases = data[this.state.defaultState]["districtData"][this.state.defaultDistrict]["recovered"]; 
            */
        }
        
         for(var d in dData) {
           dists.push(d);
           districtsConfirmedCases.push(dData[d]["confirmed"]);
           districtsConfirmedBgColor.push('rgba(255, 222, 65)');
           districtsActiveCases.push(dData[d]["active"]);
           districtsActiveBgColor.push('rgba(67, 235, 25)');
           districtsDeceasedCases.push(dData[d]["deceased"]);
           districtsDeceasedBgColor.push('rgba(235, 25, 25)');
           districtsRecoveredCases.push(dData[d]["recovered"]);
           districtsRecoveredBgColor.push('rgba(235, 130, 25)');
         }


         var totalStateConfirmedCases = districtsConfirmedCases.reduce((a, b) => {
           return a + b;
         });

         var totalStateActiveCases = districtsActiveCases.reduce((a, b) => {
             return a + b;
         });

         var totalStateDeceasedCases = districtsDeceasedCases.reduce((a, b) => {
           return a + b
         });

         var totalStateRecoveredCases = districtsRecoveredCases.reduce((a, b) => {
           return a + b;
         });



         this.setState({
             districts: dists, 
             districtsData: dData,
             districtConfirmedCases: confirmedCases,
             districtActiveCases: activeCases,
             districtDeceasedCases: deceasedCases,
             districtRecoveredCases: recoveredCases,
             confirmedCases: districtsConfirmedCases,
             confirmedBgColor: districtsConfirmedBgColor,
             activeCases: districtsActiveCases,
             activeBgColor: districtsActiveBgColor,
             deceasedCases: districtsDeceasedCases,
             deceasedBgColor: districtsDeceasedBgColor,
             recoveredCases: districtsRecoveredCases,
             recoveredBgColor: districtsRecoveredBgColor,
             stateTotalConfirmedCases: totalStateConfirmedCases,
             stateTotalActiveCases: totalStateActiveCases,
             stateTotalDeceasedCases: totalStateDeceasedCases,
             stateTotalRecoveredCases: totalStateRecoveredCases,
             ...(!dists.includes(this.state.defaultDistrict) && {
      defaultDistrict: dists[0]
   })


        },() => {
           var confirmedCases = data[this.state.defaultState]["districtData"][this.state.defaultDistrict]["confirmed"];
            var activeCases = data[this.state.defaultState]["districtData"][this.state.defaultDistrict]["active"];
            var deceasedCases = data[this.state.defaultState]["districtData"][this.state.defaultDistrict]["deceased"];
            var recoveredCases = data[this.state.defaultState]["districtData"][this.state.defaultDistrict]["recovered"];
            this.setState({
              districtConfirmedCases: confirmedCases,
             districtActiveCases: activeCases,
             districtDeceasedCases: deceasedCases,
             districtRecoveredCases: recoveredCases
            })
        });

      })
  }

  componentDidMount() {
       this.getDataFromApi();
       this.getDataForIndia();
  }

  render() {
    return (
      <div className="container-fluid">
          <div className="row mt-5">
              <div className="col-sm-4 v-center pt-3 text-center">
                  
                 <h2 className="w-100">India</h2>
                  

              </div>
              
              <IndiaStat 
              confirmed={this.state.indiaTotalConfirmedCases}
              active={this.state.indiaTotalActiveCases}
              deceased={this.state.indiaTotalDeceasedCases}
              recovered={this.state.indiaTotalRecoveredCases}
              
               />
          </div>

          <div className="row mt-5">
              <div className="col-sm-4 v-center pt-3">
                  
                  <StateFilter defaultState={this.state.defaultState} 
                               changeState={this.changeState}  />
                  

              </div>
              
              <StateStat 
              confirmed={this.state.stateTotalConfirmedCases}
              active={this.state.stateTotalActiveCases}
              deceased={this.state.stateTotalDeceasedCases}
              recovered={this.state.stateTotalRecoveredCases}
              
               />
          </div>

          <div className="row mt-5">
              <div className="col-sm-4 v-center">
                  <div className="pt-2">
                  <DistrictFilter  
                    districts={this.state.districts} 
                     defaultDistrict={this.state.defaultDistrict} changeState={this.changeState}  />
                  </div>
              </div>
              
              <DistrictStat 
              confirmed={this.state.districtConfirmedCases}
              active={this.state.districtActiveCases}
              deceased={this.state.districtDeceasedCases}
              recovered={this.state.districtRecoveredCases}
              
               />
             
          
              
          </div> 
          <div className="row mt-1"> 
              <div className="col-sm-12">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" id="graph-tab" data-toggle="tab" href="#graph" role="tab" aria-controls="graph" aria-selected="true">Graph</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="table-tab" data-toggle="tab" href="#table" role="tab" aria-controls="table" aria-selected="false">Table</a>
                    </li>
                    
                  </ul>

              </div>  
          </div>
          <div className="row mt-5">
            <div className="col-sm-12">
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="graph" role="tabpanel" aria-labelledby="home-tab">

                    <BarChart
                      districts={this.state.districts} 
                      confirmedCases={this.state.confirmedCases}
                      confirmedBgColor={this.state.confirmedBgColor}
                      activeCases={this.state.activeCases}
                      activeBgColor={this.state.activeBgColor}
                      deceasedCases={this.state.deceasedCases}
                      deceasedBgColor={this.state.deceasedBgColor}
                      recoveredCases={this.state.recoveredCases}
                      recoveredBgColor={this.state.recoveredBgColor}
                     />  

                </div>
                <div class="tab-pane fade" id="table" role="tabpanel" aria-labelledby="profile-tab">
                     <Table
                      data={this.state.districtsData}
                       districts={this.state.districts}
                       confirmedCases={this.state.confirmedCases}
                       activeCases={this.state.activeCases}
                       deceasedCases={this.state.deceasedCases}
                       recoveredCases={this.state.recoveredCases}
                     />
                </div>
                
              </div>
                          
            </div>
          </div>
      </div>
    )
  }
}  

export default App;
