import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUETYSTRING = '?token=token123'

// redux-thunkを使うことでアクションオブジェクトの代わりに
// アクション関数を返すことができるっぽい

//export const readEvents = () => ({
//    type:READ_EVENTS
//})

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUETYSTRING}`)
    console.log(response)
    dispatch({type:READ_EVENTS, response})
}


