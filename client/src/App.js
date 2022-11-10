/* eslint-disable jsx-a11y/alt-text */
import './App.css';

import {Route} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Home from './components/home/Home'

function App() {
  return (
    <div className='App'>
      <Route path exact='/'>
        <Landing/>
      </Route>
      <Route path='/home'>
        <Home/>
      </Route>
    </div>
  );
}

export default App;
