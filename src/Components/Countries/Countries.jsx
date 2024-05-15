import { useEffect } from "react";
import { useState } from "react"
import Country from "../Country/Country";

export default function Countries(){
    const [countrys, SetCountrys]=useState([]);
    const [visited, setVisited]=useState([]);

    useEffect(()=>{
        const countries=async()=>{
            const getCountries = await fetch('https://restcountries.com/v3.1/all');
            const ressCountry = await  getCountries.json();
            SetCountrys(ressCountry)
            
        }
        countries();
    },[])

    const handleVisited=(countryName)=>{
        setVisited([...visited, countryName])   
    }

    return(
        <>
            <h2>You visited Country {visited.length}</h2>
            <ul>
            {
                visited.map(visite=> <li>You visite:{visite?.common}</li>)
            }
            </ul>
            {
               countrys.map(country=> <Country country={country} key={country.cca3} handleVisited={handleVisited}></Country>)
            }
        </>
    )
}