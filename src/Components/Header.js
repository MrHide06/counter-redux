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
                        <NavDropdown title="Redux" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => {
                                    props.history.push('/iceCream')
                                }}
                            >Ice Cream</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {
                                props.history.push('/cakes')
                            }}
                            >Cakes</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {
                                props.history.push('/api')
                            }}
                            >Json Placeholder</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {
                                props.history.push('/mock')
                            }}
                            >MockAPI</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {
                                props.history.push('/cart')
                            }}
                            >Cart</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Context" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => {
                                props.history.push('/moviefunction')
                            }}
                            >Movie Function</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {
                                props.history.push('/movieclass')
                            }}
                            >Movie Class</NavDropdown.Item>
                        </NavDropdown>
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
