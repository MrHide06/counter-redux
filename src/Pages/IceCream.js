import React from 'react'
import { connect } from 'react-redux'
import { Button, Container } from 'react-bootstrap'
import { addIceCream, minusIceCream } from '../Actions/IceCreamAction'

const IceCream = (props) => {
    console.log("IceCream". props)
    return (
        <div>
            <Container>
                <h1>Saya memesan IceCream sebanyak : {props.iceCream}</h1>
                <Button onClick={() => {
                    props.addIceCream();
                }}>Add IceCream
                </Button>
                <Button onClick={() => {
                    props.minusIceCream();
                }}>Minus IceCream
                </Button>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        iceCream: state.IceCream.iceCream,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIceCream: () => dispatch(addIceCream()),
        minusIceCream: () => dispatch(minusIceCream())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCream)
