import React from "react"

const Input = ({label, id, setValue, ...props}) => {

    return(
        <>
        <label htmlFor={id}>{label}</label>
        <input 
              id={id}
              name={id}
              onChange={({target}) => setValue(target.value)}
              {...props}
        />
        </>
    )
}

export default Input