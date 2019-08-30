import axios from 'axios';

const getArtists = () => {
    return axios({
        method: 'GET',
        url: '/artist'
    })
}

const postArtist = (artistData) => {
    return axios({
        method: 'POST',
        url: '/artist',
        data: { name: artistData }
    })
}

const deleteArtist = (id) => {
    return axios({
        method: 'DELETE',
        url: `/artist/${id}`
    })
}

export {
    getArtists,
    postArtist,
    deleteArtist
}