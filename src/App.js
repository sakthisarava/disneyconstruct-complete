import React from 'react';
//import Topbar from './components/topBar/Topbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import Dev from './pages/Dev/Dev';

function App() {
  return (
    <>
      <Router>
      {/* <Topbar /> */}
        <Routes>
        <Route>
        <Route exact path='/' element={<Home />} />
        </Route>
        <Route>
        <Route exact path='/search' element={<Dev />} />
        </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
