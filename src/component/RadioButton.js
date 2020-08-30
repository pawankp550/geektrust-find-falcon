import React from 'react'

function RadioButton(props) {
    return (
        <div className="vehicles">
            {
                props.data.map(item => {
                    return (
                        <label key={item.name} >
                            <input type="radio" value={item.name} name={props.name} disabled={item.total_no > 0 ? false : true} onChange={() => {props.onChange(item, props.name)}}/>
                            {item.name}({item.total_no})
                        </label>
                    )
                })
            }
        </div>
    )
}

export default RadioButton
