import {container,Alert} from 'react-boostrap'



const Main = (props) => {

    console.log(props.children)

    return (
        <Container as="main">
            <h2>Bienvenido!</h2>
            {props.childer[1]}
            <alert variant='danger'>
                Test
            </alert>
        
        </Container>
    )
}

export default Main;