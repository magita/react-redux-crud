import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUETYSTRING = '?token=token123'

// redux-thunk$B$r;H$&$3$H$G%"%/%7%g%s%*%V%8%'%/%H$NBe$o$j$K(B
// $B%"%/%7%g%s4X?t$rJV$9$3$H$,$G$-$k$C$]$$(B

//export const readEvents = () => ({
//    type:READ_EVENTS
//})

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUETYSTRING}`)
    console.log(response)
    dispatch({type:READ_EVENTS, response})
}


