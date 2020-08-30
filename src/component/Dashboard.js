import React, {useState, useEffect} from 'react'
import { fetchToken, fetchPlanets, fetchVehicles, findFalcon } from './services/index'
import Planets from './Planets'
import Vehicle from './Vehicle'
import Button from './Button'
import Message from './Message'
import TimeTaken from './TimeTaken' 

const Dashboard = () => {
    const [token, setToken] = useState(0)

    const [planets, setPlanet] = useState([])
    const [filteredPlanets, setFilteredPlanets] = useState([])
    const [selectedPlanets, setSelectedPlanets] = useState({})
   
    const [vehicles, setVehicles] = useState([])
    const [filteredVehicles, setFilteredVehicles] = useState([])
    const [selectedVehicles, setSelectedVehicles] = useState([])

    const [timeTaken, setTimeTaken] = useState(0)

    const [response, setResponse] = useState({})
    
    const init = async () => {
        const tokenResponse = await fetchToken()
        if(!tokenResponse.error) {
            setToken(tokenResponse.token)
        } else {
            console.log(tokenResponse)
        }
    }

    const getPlanets = async () => {
        const response = await fetchPlanets()
        if(!response.error) {
            setPlanet(response)
            setFilteredPlanets(response)
        } else {
            console.log(response)
        }
    }

    const getVehicles = async () => {
        const response = await fetchVehicles()
        if(!response.error) {
            setVehicles(response)
            setFilteredVehicles(response)
        } else {
            console.log(response)
        }
    }

    const onSubmit = async () => {
        const planetsToSendTo = []
        for(let key in selectedPlanets) {
            planetsToSendTo.push(selectedPlanets[key])
        }

        const vehiclesToSend = selectedVehicles.map(current => {
            return current.item.name
        })

        const response = await findFalcon({token, planet_names: planetsToSendTo, vehicle_names: vehiclesToSend})
        setResponse(response)
    }

    useEffect(() => {
        init()
        getVehicles()
        getPlanets()
    }, [])

    const updateTime = () => {
        let time = 0
        selectedVehicles.map(vehicle => {
            let planetDist = 0
            for(let planet of planets) {
                if(planet.name === selectedPlanets[vehicle['name']]) {
                    planetDist = planet.distance
                }
            }
            time += planetDist/vehicle.item.speed
        })

        setTimeTaken(time)
    }

    useEffect(() => updateTime(), [selectedPlanets, selectedVehicles, vehicles])

    const render = () => {
        if(response.status) {
            return (
                response.status && <Message data={response} resetFunction={resetAll} timeTaken={timeTaken}/>
            )
        } else {
            return (
                filteredPlanets.length && filteredVehicles.length ? (<div className='dashboard-content'>
                    <div className="planet-vehicle-container">
                        <h3>Select planets you want to search in:</h3>
                        <Planets data={{ filteredPlanets, planets, selectedPlanets, setSelectedPlanets }}/>
                        <Vehicle data={{ selectedVehicles, setSelectedVehicles, vehicles, filteredVehicles, setFilteredVehicles, selectedPlanets }}/>
                        <Button data={ {selectedPlanets, selectedVehicles}} onClick={onSubmit}/>
                    </div>
                    <TimeTaken timeTaken={timeTaken}/>
                </div>
            ) : <h3>Loading...</h3>
            )
        }
    }

    const resetAll = () => {
        setResponse({})
        setSelectedPlanets({})
        setSelectedVehicles([])
    }
 
    return (
        <div>
            <h1>Finding Falcone!</h1>
            {render()}
        </div>
    )
}

export default Dashboard