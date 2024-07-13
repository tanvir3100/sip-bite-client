import axios from 'axios'

const axiosPublic = axios.create({
    baseURL: 'http://localhost:4900'
})

const useAxios = () => {
    return axiosPublic
};

export default useAxios;