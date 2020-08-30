import React from 'react'

function Button(props) {
    const { selectedPlanets, selectedVehicles } = props.data
    const planetKeys = Object.keys(selectedPlanets)
    return (
        <div>
            <button disabled={selectedVehicles.length === 4 && planetKeys.length === 4 ? false : true} onClick={props.onClick}>Find Falcon</button>
        </div>
    )
}

export default Button