import Axios from 'axios'

export const fetchToken = async () => {
    const options = {
        headers: {'Accept' : 'application/json' }
      };
    try {
        const response = await Axios.post('https://findfalcone.herokuapp.com/token', {}, options)
        return response.data
    } catch {
        return {error: 'something went wrong'}
    }
}

export const fetchPlanets = async () => {
    try {
        const response = await Axios.get('https://findfalcone.herokuapp.com/planets')
        return response.data
    } catch {
        return {error: 'something went wrong'}
    }
}

export const fetchVehicles = async () => {
    try {
        const response = await Axios.get('https://findfalcone.herokuapp.com/vehicles')
        return response.data
    } catch {
        return {error: 'something went wrong'}
    }
}

export const findFalcon = async (data) => {
    const options = {
        headers: {'Accept': 'application/json',
        'Content-Type': 'application/json ' }
      };
    try {
        const response = await Axios.post('https://findfalcone.herokuapp.com/find', JSON.stringify(data), options)
        return response.data
    } catch {
        return {error: 'something went wrong'}
    }
}