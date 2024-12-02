import { useState } from "react"
import {PropTypes} from "prop-types"

export const AddCategories = ({AddCategora}) => {

    const [value, setValue] = useState('');

   const inputChange = ({target})=> {
       
       setValue(target.value)
    //    console.log(event.target.value);
   }

   const onSubmit=(event)=>{
    event.preventDefault();
    console.log(value);
    if( value.trim().length < 1){
      return;
    }
    // agregarCategoria(agregarCategoria => [...agregarCategoria,value])
    AddCategora(value.trim());
    setValue('')
   }

  return (

    <form onSubmit={(event) => onSubmit(event)} >

        <input 
        
        type="text"
        placeholder="Buscar gif"
        value={value}
        onChange={(event) => inputChange(event)}
        />
    </form>
  )
}

AddCategories.propTypes ={
    AddCategories: PropTypes.array
}