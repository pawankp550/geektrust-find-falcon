import React from 'react'
import './dashboard.css'

const Dropdown = (props) => {

    return (
        <select onChange={props.onChange} value={props.value}>
            <option >{props.value ? props.value : 'select'}</option>
            {
                props.data.map(item => <option key={item.name}>{item.name}</option>)
            }
        </select>
    )
}

export default Dropdown