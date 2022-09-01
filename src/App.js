import React from 'react';
import './App.css';
import Home from './Components/Pages/Home';
import ViewQuotes from './Components/Pages/ViewQuotes';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
//eslint-disable-next-line


function App() {
  // console.log(firebase.)
  // var page = 0;
  const [quotes , setQuotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home quotes={quotes} setQuotes={setQuotes} loading={loading} setLoading={setLoading}/>}/>
        <Route path="viewQuotes" element={<ViewQuotes/>}/>
      </Routes>
    </BrowserRouter>
    // <>

    // </>
  );
}

export default App;



//Dope Loaders
// RingLoader, HashLoader, PacManLoader, PropagateLoader