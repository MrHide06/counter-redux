import React from 'react'
import { connect } from 'react-redux'
import { Button, Container } from 'react-bootstrap'
import { addCakes, minusCakes } from '../Actions/CakesAction'

const Cakes = (props) => {
    console.log("Cakes". props)
    return (
        <div>
            <Container>
                <h1>Saya memesan Cakes sebanyak : {props.cakes}</h1>
                <Button onClick={() => {
                    props.addCakes();
                }}>Add Cakes
                </Button>
                <Button onClick={() => {
                    props.minusCakes();
                }}>Minus Cakes
                </Button>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cakes: state.Cakes.cakes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCakes: () => dispatch(addCakes()),
        minusCakes: () => dispatch(minusCakes())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cakes)
