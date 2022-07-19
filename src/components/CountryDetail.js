import React from 'react'; 
import { useParams, Link } from "react-router-dom";
import { Context } from '../App';
import { BsArrowLeft } from 'react-icons/bs';


export default function CountryDetail(){
    let countryData = React.useContext(Context)
    let params = useParams();
    
    let filteredCountry = countryData.filter((detailedCountry) => { // filter country data according to the url
      let searchCountry = params.country;
      if (!searchCountry) return true;
      let CountryName = detailedCountry.name.official.toLowerCase();
      return CountryName.startsWith(searchCountry)
    })

    let filteredBorderCountry = countryData.filter((item) => { // filter countries that border the filtered country to use them later in the component
        if(filteredCountry[0].borders){
          return filteredCountry[0].borders.includes(item.cca3)
        }   
    })
    
    return(
            filteredCountry.map(country => 
            <div className="dark:bg-very-dark-blue overflow-auto px-5 lg:px-20 pt-10">

                <Link to="/" className="inline-block mb-16 px-6 lg:px-9 py-1 lg:py-2 dark:text-white shadow-[1px_1px_5px_gray] hover:shadow-[1px_1px_5px_2px] dark:shadow-zinc-900 dark:bg-dark-blue">
                    <BsArrowLeft className='inline-block text-xl lg:text-2xl mr-2' />
                    <button className="text-[15px] lg:text-[17px]" type='button'>Back</button>
                </Link>

                <div className="w-full lg:flex mb-5 dark:text-white" key={country.name.official}>
                    <div className='lg:min-w-[450px] lg:h-[400px]'>
                        <img className="w-full sm:w-3/4 lg:w-full lg:h-full" src={country.flags.png} alt={country.name.official}/>
                    </div>
                    <div className="lg:flex lg:flex-col">
                        <h1 className="mt-12 lg:mt-0 font-extrabold lg:ml-8 xl:ml-24">{country.name.common}</h1>
                        <br/>
                        <div className="lg:flex lg:ml-8 xl:ml-24">
                            <ul className="mb-10 lg:mr-8 xl:mr-52">
                                <li className="mb-2 lg:w-[200px]"><span className="font-semibold">Native Name:</span> {country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</li>
                                <li className="mb-2 lg:w-[200px]"><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</li>
                                <li className="mb-2 lg:w-[200px]"><span className="font-semibold">Region:</span> {country.region}</li>
                                <li className="mb-2 lg:w-[200px]"><span className="font-semibold">Sub Region:</span> {country.subregion}</li>
                                <li><span className="font-semibold">Capital:</span> {country.capital}</li>
                            </ul>
                        
                            <ul className="mb-10">
                                <li className="mb-2 lg:w-[200px]"><span className="font-semibold">Top Level Domain:</span> {country.tld}</li>
                                <li className="mb-2 lg:w-[200px]"><span className="font-semibold">Currencies:</span> {country.currencies[Object.keys(country.currencies)[0]].name}</li>
                                <li className="mb-2 lg:w-[200px]"><span className="font-semibold">Languages:</span> {Object.values(country.languages).join(", ")}</li>
                            </ul>
                        </div>
                        
                        <div className="flex flex-col lg:ml-8 xl:ml-24">
                            <h2 className="font-semibold min-w-fit mb-5 lg:mr-5">{filteredBorderCountry.length ? "Border Countries:" : "Border Countries: None"}</h2>
                            <div className="lg:flex lg:flex-wrap">
                                {filteredBorderCountry.map((item)=>
                                <Link key={item.area} className="px-6 py-1 mb-5 mr-3 hover:shadow-[1px_1px_5px_2px] inline-block dark:text-white shadow-[1px_1px_5px_gray] dark:shadow-zinc-900 dark:bg-dark-blue" to={`/${item.name.official.toLowerCase()}`}><button type="button">{item.name.common}</button></Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}