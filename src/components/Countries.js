import React from 'react';

export default function Countries(props){

    return (
                <div className="rounded-md w-5/6 lg:w-full h-[370px] bg-white dark:bg-dark-blue drop-shadow-md hover:shadow-[1px_1px_5px_2px] cursor-pointer transition duration-500 hover:scale-105 mb-11" onClick={props.onClick}>
                    <img className="w-full h-1/2 rounded-md" src={props.flag} alt="country flag"/>
                    <div className="h-1/2 pt-7 pl-7 dark:text-white">
                        <h2 className="font-extrabold mb-3">{props.country}</h2>
                        <div className="flex flex-col">
                            <div className="mb-1">
                                <span className="font-semibold mr-1">Population:</span>
                                <span>{props.population.toLocaleString()}</span>
                            </div>
                            <div className="mb-1">
                                <span className="font-semibold mr-1">Region:</span>
                                <span>{props.region}</span>
                            </div>
                            <div>
                                <span className="font-semibold mr-1">Capital:</span>
                                <span>{props.capital}</span>
                            </div>
                        </div>
                    </div>
                </div>
    )
}