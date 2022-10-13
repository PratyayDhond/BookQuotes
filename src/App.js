import React from 'react';
import './App.css';
import AddQuote from './Components/Pages/AddQuote';
import ViewQuotes from './Components/Pages/ViewQuotes';
import Home from './Components/Pages/Home';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchQuotes from './Components/Pages/SearchQuotes';
//eslint-disable-next-line

var setQuotesExport;

function App() {
  // console.log(firebase.)
  // var page = 0;
  const [quotes , setQuotes] = React.useState([]);
  const [userFavourites, setUserFavourites] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [isAdmin, setIsAdmin] = React.useState(false);
  setQuotesExport = setQuotes;
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="addQuote" element={<AddQuote quotes={quotes} setQuotes={setQuotes} userFavourites={userFavourites} setUserFavourites={setUserFavourites} loading={loading} setLoading={setLoading} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>}/>
        <Route path="viewQuotes" element={<ViewQuotes/>}/>
        <Route path="searchQuotes" element={<SearchQuotes/>} />
        {/* <Route path="/" element={<Home email={email} setEmail={setEmail} password={password} setPassword={setPassword} setConfirmPassword={setConfirmPassword} confirmPassword={confirmPassword}/>}/> */}
        <Route path='/' element={<Home />}></Route>
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
