import axios from "axios"
import { CONFERENCE_INSERT_REQUEST,  CONFERENCE_INSERT_SUCCESS, CONFERENCE_INSERT_FAIL } from '../constants/conferenceConstant.js'

export const conferenceAdd = (conName, conDes, conSeat, conPrice, conImage, conFeatures) => async (dispatch) => {
    try {
        dispatch({
            type: CONFERENCE_INSERT_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('http://localhost:6500/api/conference/addConference', { conName, conDes, conSeat, conPrice, conImage, conFeatures },
            config
        )

        dispatch({
            type: CONFERENCE_INSERT_SUCCESS,
            payload: data,
        })


        localStorage.setItem('conferenceInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: CONFERENCE_INSERT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
