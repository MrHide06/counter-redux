import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { getDataApi } from '../Actions/ApiAction'

function Api(props) {
    
    useEffect(() => {
        props.getDataApi()
    }, [])
    console.log(props)
    return (
        <div>
            <h1>API JSON PLACEHOLDER</h1>
            {props.api.map((item, index) => (
                <li key={index}>{item.title}</li>
            ))}
        </div>
    )
}

const mapStateToProps = (props) => {
    console.log('mapState', props)
    return{
        api:props.getApi.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDataApi: () => dispatch(getDataApi()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Api)
