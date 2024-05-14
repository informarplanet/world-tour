import { useState } from "react";

export default function Country ({country}){
    // console.log(country)
    const {flags, name}=country;

    const [Visite, setVisite]=useState(false);

    const handleVisite = () =>{
        setVisite(!Visite)
    }

    return(
        <>
         <p>Name: {name?.common}</p>
        <img src={flags?.png} alt="" srcset="" />
        <br />
        <button onClick={handleVisite }> {Visite?'Visite':'Going'}</button>
        {Visite?'i alredy Visite this country':'Going to this country'}
        </>
    )
}