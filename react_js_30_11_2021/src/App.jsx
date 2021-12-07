import './App.css'
import { Component } from 'react'
import ChooseEven from './chooseEven/ChooseEven'
// import CounterSimple from './counter/CounterSimple'

class App extends Component {
  
  render(){

  return (
    <div className="App">
      {/* <CounterSimple/> */}
      <ChooseEven/>
    </div>
  )
}
}

export default App
