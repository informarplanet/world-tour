import { useState } from "react";

export default function Country ({country, handleVisited}){
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
        <button onClick={()=>{handleVisite(); handleVisited(name)}}> {Visite?'Visite':'Going'}</button>
        {Visite?'i alredy Visite this country':'Going to this country'}
        {/* <button onClick={()=>handleVisited(name)}>mark as visite</button> */}
        </>
    )
}