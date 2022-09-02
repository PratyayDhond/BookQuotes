import React from 'react';
import './App.css';
import Home from './Components/Pages/Home';
import ViewQuotes from './Components/Pages/ViewQuotes';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
//eslint-disable-next-line

var setQuotesExport;

function App() {
  // console.log(firebase.)
  // var page = 0;
  const [quotes , setQuotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  setQuotesExport = setQuotes;
  
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

export {setQuotesExport};
export default App;



//Dope Loaders
// RingLoader, HashLoader, PacManLoader, PropagateLoader

//Single Quotes, Quotations ""
// ALT + 0145 (‘), ALT + 0146 (’)
//Double Quotes, Quotations ""
// ALT + 0147 (“), ALT + 0148 (”)
