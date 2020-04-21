import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand onClick={() => {
                    props.history.push('/')
                }}>Counter Redux</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link 
                            onClick={() => {
                                props.history.push('/iceCream')
                            }}
                        >Ice Cream</Nav.Link>
                        <Nav.Link 
                            onClick={() => {
                                props.history.push('/cakes')
                            }}
                        >Cakes</Nav.Link>
                        <Nav.Link 
                            onClick={() => {
                                props.history.push('/api')
                            }}
                        >Json Placeholder</Nav.Link>
                        <Nav.Link 
                            onClick={() => {
                                props.history.push('/mock')
                            }}
                        >MockAPI</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Jumlah Ice Cream: {props.iceCream}</Nav.Link>
                        <Nav.Link href="#deets">Jumlah Cakes: {props.cakes}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>       
        </div>
    )
}

const mapStateToProps = state => {
    return {
        iceCream: state.IceCream.iceCream,
        cakes: state.Cakes.cakes
    }
}
export default connect(mapStateToProps, null)(withRouter(Header))
