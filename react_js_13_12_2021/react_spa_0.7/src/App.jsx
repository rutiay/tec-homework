import {BrowserRouter, Link , Switch, Route} from 'react-router-dom';
import "./App.css";
import Home from './Pages/Home';
import Persons from "./Pages/Persons";
import AddPerson from "./Pages/AddPerson";
import Details from "./Pages/Details";

function App() {
  const persons = [
    {name: "Ruti", age: 28, biography: "Im from Netanya"},
    {name: "Maayan", age: 28, biography: "Im from Ashkelon"}
  ]

  let currentPerson = {};

  const addPerson = (person) => {
    persons.push(person);
  }

  const setCurrentPerson = (person) => {
    currentPerson = person;
  }

    
    return (
      <BrowserRouter>
        <div className="App">
          <Link to='/'>Home</Link> <Link to='/Persons'>Persons</Link> 
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Persons' render={() => <Persons persons={persons} setCurrentPerson={setCurrentPerson}/>} />
            <Route exact path='/AddPerson' render={() => <AddPerson addPerson={addPerson}/>} />
            <Route exact path='/Details' render={() => <Details person={currentPerson} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

export default App;
