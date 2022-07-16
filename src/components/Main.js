import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

import Countries from './Countries';
import { Context } from '../App';


 export default function Main(){
    let countryData = React.useContext(Context) 
    let navigate = useNavigate();

    const [searchInput, setSearchInput] = React.useState("") 
    const [continent, setContinent] = React.useState("Filter by Region")
   
    function inputChange(e){
        setSearchInput(e.target.value)
        setContinent("Filter by Region")
    }

    function continentChange(selectContinent){
        setContinent(selectContinent)
        setSearchInput("")
    }

    function countrySearchParam(countryArea){
        let countrySearch = countryArea
        navigate(`/${countrySearch}`)
    }
    
    return(
        <div className="flex flex-col items-center sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-16 sm:pl-10 min-h-screen text-[14px] pt-6 lg:pr-16 bg-very-light-gray dark:bg-very-dark-blue">
            <div className="lg:flex lg:justify-between w-full lg:w-full pl-5 sm:pl-0 sm:col-span-2 lg:col-span-3 xl:col-span-4">
                    <div className="rounded-md bg-white flex w-11/12 sm:w-[370px] h-12 mb-10 pl-7 dark:bg-dark-blue drop-shadow-md">
                        <span className="w-fit text-dark-gray flex justify-center items-center dark:text-white"><AiOutlineSearch className="text-xl" /></span>
                        <input placeholder="Search for a country..." className="rounded-md dark:bg-dark-blue dark:placeholder:text-white focus:outline-none dark:text-white w-11/12 h-full pl-6" value={searchInput} onChange={inputChange} type="search" />
                    </div>
                    
                    
                    <select className="rounded-md dark:bg-dark-blue drop-shadow-md dark:text-white outline-none w-[200px] h-12 font-semibold px-5 py-3 mb-10" value={continent} onChange={e=>continentChange(e.target.value)}>
                        <option className="mb-2" value="Filter by Region" disabled>Filter by Region</option>
                        <option className="mb-2" value="All" defaultValue>All</option>
                        <option className="w-[10px]" value="Africa" >Africa</option>
                        <option className="w-[10px]" value="America">America</option>
                        <option className="w-[10px]" value="Asia">Asia</option>
                        <option className="w-[10px]" value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
            </div>

            {countryData.filter(country => {
                if(continent === "Filter by Region" && searchInput === ""){
                    return country
                }
                else if(searchInput === "" && continent === "All"){
                    return country
                }
                else if(continent !== "Filter by Region" && country.region.includes(continent)){
                    return country
                }
                else if(searchInput !== "" && country.name.common.toLowerCase().includes(searchInput.toLowerCase())){
                    return countryData
                }
            }
            ).map(country => 
            <Countries key={country.name.common} 
                country={country.name.common} 
                population={country.population} 
                capital={country.capital} 
                region={country.region}
                flag={country.flags.png}
                onClick={()=>{
                    countrySearchParam(country.name.official.toLowerCase())
                 }
                }
             />
             )}
        </div>
    )

}