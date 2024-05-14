import { useEffect } from "react";
import { useState } from "react"
import Country from "../Country/Country";

export default function Countries(){
    const [countrys, SetCountrys]=useState([]);

    useEffect(()=>{
        const countries=async()=>{
            const getCountries = await fetch('https://restcountries.com/v3.1/all');
            const ressCountry = await  getCountries.json();
            SetCountrys(ressCountry)
            
        }
        countries();
    },[])


    return(
        <>
            <h2>You visited Country {countrys.length}</h2>
            {
               countrys.map(country=> <Country country={country} key={country.cca3}></Country>)
            }
        </>
    )
}