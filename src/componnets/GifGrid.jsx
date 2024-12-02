
// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GridItem } from "./GridItem";
import { useFectGifs } from "../hooks/useFectGits";

export const GifGrid = ({categoria}) => {

    const {images, isLoading} = useFectGifs(categoria)
    // console.log({images, isLoading});


    return (

    <>
    <h3>{categoria}</h3>
    { isLoading ?  <h2>cargando...</h2> : null }
   
    <div className="card-grid" >

        {images.map( (x)=> {
            return(
                <GridItem key={x.id} {...x} />
                
            )
           
        } )}
    </div>
    </>
  )
}
