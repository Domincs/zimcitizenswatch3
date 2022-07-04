
import axios from 'axios'

export const getSummaryPerCountry = async (url) => {
    const data = (await axios.get(`${url}/summary`)).data
    return data
}

export const getSummaryPerSector = async (url, sector) => {
    const data = (await axios.get(`${url}/${sector}/summary`)).data
    return data
}