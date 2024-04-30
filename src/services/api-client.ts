import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: 
    {
        key: '213c33b20fe046e7afe99512f62a5c5a'
    }
})