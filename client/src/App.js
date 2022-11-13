/* eslint-disable jsx-a11y/alt-text */
import './App.css';

import {Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/home/Home';
import CountryDetails from './components/countryDetails/countryDetails';
import CreateActivity from './components/CreateActivity/CreateActivity';

function App() {
  return (
    <div className='App'>
      <Route path exact='/'component={Landing}/>
      <Route path='/home' component={Home}/>
      <Route path='/countryDatails/:id' component={CountryDetails}/>
      <Route path='/createActivity' component={CreateActivity} />
    </div>
  );
}

export default App;
