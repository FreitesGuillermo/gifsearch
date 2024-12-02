import { useState } from "react";
import { AddCategories } from "./componnets/addCategories";
import { GifGrid } from "./componnets/gifGrid";

export const GifExpertApp = () => {

    const key='pdOtSOGR1W3TDC81W5NXU3eygsNuuBIv';

    const [categories, setCategories] = useState([])
    console.log(key);
    // console.log(categories);

    const AddCategora = (newCategoria) => {

        if (categories.includes(newCategoria)){
            return

        } 
        
        // const newCategoria = 'dandanda';
        // categories.push(newCategoria)
        // console.log(newCategoria);
         setCategories([ newCategoria, ...categories]);
        //  console.log(categories);
    }

  return (
    <>
    

    <h1>GifExpert</h1>

    <AddCategories AddCategora={(x) => AddCategora(x)}
    //  agregarCategoria= {setCategories}
      />
  

    {/* <button onClick={AddCategora} >Add</button> */}


        {categories.map((x)=> {
            
           return (
           <GifGrid categoria={x} key={x}/>
           )
        }) 
        }
        
    
    </>
  )
}
