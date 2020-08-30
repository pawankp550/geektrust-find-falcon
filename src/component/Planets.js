import React, {useState, useEffect} from 'react'
import Dropdown from './Dropdown'

const Planets = (props) => {
    const [filteredPlanets, setFilteredPlanets] = useState([])
    const { planets, selectedPlanets, setSelectedPlanets } = props.data

    const onPlanetChange = (e, planetNum) => {
        setSelectedPlanets({...selectedPlanets, [planetNum]: e.target.value})
    }

    useEffect(() => {
        const newFiltered = planets.filter(item => {
             return (item.name !== selectedPlanets['first'] && item.name !== selectedPlanets['second'] && item.name !== selectedPlanets['third'] && item.name !== selectedPlanets['fourth'])  
        })
        setFilteredPlanets(newFiltered)
     }, [selectedPlanets])

    return (
        <> 
            {
                <div className='planets-container'>
                    <div>
                        <span className='destination-title'>Destination 1</span>
                        <Dropdown data = {filteredPlanets}  value={selectedPlanets['first']} onChange = {(e) => onPlanetChange(e, 'first')}/>
                    </div>
                    <div>
                        <span className='destination-title'>Destination 2</span>
                        <Dropdown data = {filteredPlanets}  value={selectedPlanets['second']} onChange = {(e) => onPlanetChange(e, 'second')}/>
                    </div>
                    <div>
                        <span className='destination-title'>Destination 3</span>
                        <Dropdown data = {filteredPlanets}  value={selectedPlanets['third']} onChange = {(e) => onPlanetChange(e, 'third')}/> 
                    </div>
                    <div>
                        <span className='destination-title'>Destination 4</span>
                        <Dropdown data = {filteredPlanets}  value={selectedPlanets['fourth']} onChange = {(e) => onPlanetChange(e, 'fourth')}/>
                    </div>
                </div>
            }
        </>
    )
}

export default Planets  