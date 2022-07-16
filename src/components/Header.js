import React from 'react';
import { themeContext } from '../App';
import { BsMoon, BsMoonFill } from "react-icons/bs";


export default function Header(){
    let themeToggle = React.useContext(themeContext)
    
    return(
        <div className="h-[70px] lg:h-24 bg-white text-black drop-shadow-md dark:text-white  dark:bg-dark-blue flex justify-between items-center px-5 lg:px-20">
            <h2 className="font-extrabold text-sm sm:text-base md:text-lg lg:text-xl">Where in the world?</h2>
            <div className="h-fit flex items-center cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl font-semibold  " onClick={themeToggle}>
                <BsMoonFill className="mr-2 hidden dark:inline-block dark:fill-white" />
                <BsMoon className="mr-2 dark:hidden" />
                <span>Dark Mode</span>
            </div>
        </div>
    )
}