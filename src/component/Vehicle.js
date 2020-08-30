import React, {useEffect} from 'react'
import RadioButton from './RadioButton'

import _ from 'lodash'

function Vehicle(props) {
    const {selectedVehicles, selectedPlanets, setSelectedVehicles, vehicles, setFilteredVehicles, filteredVehicles} = props.data
    
    useEffect(() => {
        let cloned = _.cloneDeep(vehicles)
        setFilteredVehicles(cloned)
      }, [vehicles, setFilteredVehicles])
    
      const onVehicleChange = (item, name) => {
        let filteredSelectedVehicles = selectedVehicles.filter((current) => {
            return current.name !== name
        })
        setSelectedVehicles([...filteredSelectedVehicles, { item, name }])
      }
    
      useEffect(() => {
        let tempVehicles = _.cloneDeep(vehicles)
        for(let vehicle of tempVehicles) {
          for(let current of selectedVehicles) {
            if(current.item.name === vehicle.name) {
              vehicle.total_no = vehicle.total_no - 1
            }
          }
        }
       setFilteredVehicles(tempVehicles)
      }, [selectedVehicles, vehicles, setFilteredVehicles])
    

    return (
        <div className="vehicles-container">
            { selectedPlanets['first'] ?  <RadioButton onChange={onVehicleChange} data={filteredVehicles} name="first"/> : null }
            { selectedPlanets['second'] ? <RadioButton onChange={onVehicleChange} data={filteredVehicles} name="second"/> : null }
            { selectedPlanets['third'] ? <RadioButton onChange={onVehicleChange} data={filteredVehicles} name="third"/> : null }
            { selectedPlanets['fourth'] ? <RadioButton onChange={onVehicleChange} data={filteredVehicles} name="fourth"/> : null }
        </div>
    )
}

export default Vehicle
