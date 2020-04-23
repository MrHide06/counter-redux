import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {addCart, minusCart } from '../Actions/HookAction'
import { Button } from 'react-bootstrap'

const Hook = () => {
    const cartSelector = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Cart nya adalah {cartSelector}</h1>
            <Button onClick={() => dispatch(addCart())}>Add Cart</Button>
            <Button onClick={() => dispatch(minusCart())}>Minus Cart</Button>
        </div>
    )
}

export default Hook
