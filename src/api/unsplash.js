import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID FhsrZH-2QucbuH-d4ej1fsmceiarchDtxd_vvf9Tbd0'
    }
});


