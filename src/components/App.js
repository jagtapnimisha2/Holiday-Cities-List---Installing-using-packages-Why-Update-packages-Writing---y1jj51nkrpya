Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@jagtapnimisha2 
sarangsalame
/
Holiday-List-React---Installing-using-packages-Why-Update-packages-Writing-M---7vglbgwsdnhf
Public
forked from Fizz007/Holiday-List-React---Installing-using-packages-Why-Update-packages-Writing-M---7vglbgwsdnhf
Code
Pull requests
Actions
Projects
Security
Insights
Holiday-List-React---Installing-using-packages-Why-Update-packages-Writing-M---7vglbgwsdnhf/src/components/App.js /
@Fizz007
Fizz007 Update App.js
Latest commit b2d8009 yesterday
 History
 1 contributor
131 lines (64 sloc)  2.22 KB

import React, { Component, useState } from "react";

import '../styles/App.css';

class App extends Component {

  constructor(props) {

    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },

    { name: 'Amsterdam', country: 'Netherlands' },

    { name: 'New York', country: 'USA' },

    { name: 'Darjeeling', country: 'India' },

    { name: 'Tokyo', country: 'Japan' },

    { name: 'Lonavala', country: 'India' },

    // { name: 'Brandenburg Gate', country: 'Germany' },

    // { name: 'Reichstag Building', country: 'Germany' },

    // { name: 'Museum Island', country: 'Germany' },

    // { name: 'Munnar', country: 'India' },

    // { name: 'Leh Ladakh', country: 'India' },

    // { name: 'Goa', country: 'India' },

    // { name: 'Agra', country: 'India' },

    // { name: 'Dalhousie', country: 'India' },

    // { name: 'Coorg', country: 'India' },

    // { name: 'Rome', country: 'Italy' },

    // { name: 'Milan', country: 'Italy' },

    // { name: 'Venice', country: 'Italy' },

    // { name: 'Varanasai', country: 'India' },

    // { name: 'Jaipur', country: 'India' },

    // { name: 'The Hofburg', country: 'Austria' },

    // { name: 'Belvedere Palace', country: 'Austria' },

    // { name: 'St. Stephen Cathedral', country: 'Austria' },

    // { name: 'Kahna National Park', country: 'India' },

    // { name: 'Amritsar', country: 'India' },

    // { name: 'Mussoorie', country: 'India' },

    // { name: 'Mount Abu', country: 'India' },

    // { name: 'Tirupati', country: 'India' },

    ]

    this.citiesInIndia = this.filterCities();

    this.cityListModified = this.addKey();

  }

  filterCities () {

    let filteredArr = this.cityList.filter((obj) => {

        return obj.country == 'India';

    })

    return filteredArr;

  }

  addKey() {

  //  console.log(this.citiesInIndia);

    let count = 0;

    let city;

    

    const listArr = this.citiesInIndia.map((obj) => {

        city = obj.name;

        ++count;

        let keyValue = `location${count}`;

        return <li key={keyValue}>{city}</li>

    });

    return listArr;

  }

  render() {

    return (

      <div id="main">

        <ol>{this.cityListModified}</ol>

      </div>

    )

  }

}

export default App;
