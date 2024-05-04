import React from "react";

const Select = () => {

    const [estado, setEstado] = React.useState('')

    return(
        <form>
            <select value={estado} onChange={({target}) => setEstado(target.value)}>
                <option disabled value=''>Selecione</option>
                <option value="acre">Acre</option>
                <option value="alagoas">Alagoas</option>
                <option value="bahia">Bahia</option>
                <option value="ceara">Ceará</option>
            </select>
        {estado.toUpperCase()}    
        </form>
    )
}

export default Select;