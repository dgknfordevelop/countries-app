import React, { useEffect, useState }  from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import CountryDetail from './components/CountryDetail';

export const Context = React.createContext();
export const themeContext = React.createContext();

function App() {
const [data, setData] = useState([]);
const [style, setStyle] = useState(JSON.parse(localStorage.getItem('style')));

useEffect(() => {
  fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => setData(data.map(country => country)))

 },[])
 
 useEffect(()=>{
    localStorage.setItem("style", JSON.stringify(style))
    document.documentElement.classList.toggle("bg-very-dark-blue", style === "dark")
 }, [style])
 
 function toggleTheme(){
    setStyle(style === "dark" ? "" : "dark")
 }
  
 
 return (
    <Context.Provider value={data}>
      <div className={style}>
        <themeContext.Provider value={toggleTheme}>
          <Header />
        </themeContext.Provider>  
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/:country" element={<CountryDetail />} /> 
          </Routes>
      </div>
    </Context.Provider>
  )
}

export default App;
