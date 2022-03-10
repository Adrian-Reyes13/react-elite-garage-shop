import {Container,Alert} from 'react-bootstrap'
import { useState } from "react"

const ItemCount = (props) =>  {

    const inicial = 5
    const stock = 10
    
    let [estado, setEstado] = useState(inicial)

    const handleSumar = () => {

        if (estado < stock){
            setEstado(estado + 1)
        }
        

    }

    const handleRestar = () => {
        setEstado(estado - 1)

    }

    const handleResetear = () => {
        setEstado(0)

    }

    return (
        <Container as="main">
        <h2>Bienvenido!</h2>
        <p>Stock : {estado} </p>
        <button onclick={handleSumar}>+</button>
        <button onclick={handleRestar}>-</button>
        <button onclick={handleResetear}>.</button>
        
    
    </Container>
    )

}


export default ItemCount;