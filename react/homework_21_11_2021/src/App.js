import React from 'react';
import Candies from './components/Candies';
import Kitchens from './components/Kitchens';
import Foods from './components/Foods';
import Employees from './components/Employees';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component{
  constructor(){
    super();
  }

  render() {
    return(
      <div>
        <Header/>
        <Candies/>
        <Kitchens/>
        <Foods/>
        <Employees/>
        <Footer/>
      </div>
    )
  }
}

export default App;
