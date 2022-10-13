import React from 'react';
import './App.css';
import AddQuote from './Components/Pages/AddQuote';
import ViewQuotes from './Components/Pages/ViewQuotes';
import Home from './Components/Pages/Home';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchQuotes from './Components/Pages/SearchQuotes';
//eslint-disable-next-line

var quotes, setQuotes, userFavourites, setUserFavourites, loading, setLoading, isAdmin, setIsAdmin, quotesCalled, setQuotesCalled, userID, setUserID;

function App() {
  const [quotesapp_ , setQuotesapp_] = React.useState([]);
  const [userFavouritesapp_, setUserFavouritesapp_] = React.useState([]);
  const [loadingapp_, setLoadingapp_] = React.useState(true);
  const [isAdminapp_, setIsAdminapp_] = React.useState(false);
  const [quotesCalledapp_, setCalledapp_ ] = React.useState(false);
  const [userIDapp_, setUserIDapp_] = React.useState(null);
  quotes = quotesapp_ ;
  setQuotes = setQuotesapp_;
  userFavourites = userFavouritesapp_;
  setUserFavourites = setUserFavouritesapp_;
  loading = loadingapp_;
  setLoading = setLoadingapp_;
  isAdmin = isAdminapp_;
  setIsAdmin = setIsAdminapp_;
  quotesCalled = quotesCalledapp_;
  setQuotesCalled = setCalledapp_;
  userID = userIDapp_;
  setUserID = setUserIDapp_;

  
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

export {quotes, setQuotes, userFavourites, setUserFavourites, loading, setLoading, isAdmin, setIsAdmin, quotesCalled, setQuotesCalled, userID, setUserID};
export default App;



//Dope Loaders
// RingLoader, HashLoader, PacManLoader, PropagateLoader

//Single Quotes, Quotations ""
// ALT + 0145 (‘), ALT + 0146 (’)
//Double Quotes, Quotations ""
// ALT + 0147 (“), ALT + 0148 (”) 