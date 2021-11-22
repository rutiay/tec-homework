import React from 'react';
import Candies from './components/Candies';
import Kitchens from './components/Kitchens';
import Foods from './components/Foods';
import Employees from './components/Employees';
import Header from './components/Header';

class App extends React.Component{
  constructor(){
    super();
  }

  render() {
    return(
      <div>
        <Candies/>
        <Kitchens/>
        <Foods/>
        <Employees/>
        <Header/>
      </div>
    )
  }
}

export default App;
