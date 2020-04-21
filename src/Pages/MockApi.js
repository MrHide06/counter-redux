import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { getDataMock, postDataMock } from '../Actions/MockAction'

function Mock(props) {
    const [mock, setMock] = useState('')
    
    useEffect(() => {
        props.getDataMock()
    }, [])

    const handleChange = ( e ) => {
        setMock(e.target.value)
    }

    const handlePlus = ( e ) => {
        e.preventDefault()
        
        let newMock = {
            id:props.mock[props.mock.leght - 1] + 1,
            name: mock
        }
        props.postDataMock(newMock)

        console.log(newMock)
    }
    console.log(props)
    return (
        <div>
            <h1>API Get And Post</h1>
            <form onSubmit={handlePlus}>
                <label>
                    New Channel YT :
                    <input
                        type='text'
                        name='mock'
                        value={mock}
                        onChange={handleChange}
                    />
                </label>
                <input type='submit' value='Plus' />
            </form>

            {props.mock.map((item, index) => (
                <li key={index}>{item.name}</li>
            ))}
        </div>
    )
}

const mapStateToProps = (props) => {
    console.log('mapState', props)
    return{
        mock:props.getMock.data
    }
}

const mapDispatchToProps = {getDataMock, postDataMock}

export default connect(mapStateToProps, mapDispatchToProps)(Mock)
