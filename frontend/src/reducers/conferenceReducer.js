import { CONFERENCE_INSERT_REQUEST,  CONFERENCE_INSERT_SUCCESS, CONFERENCE_INSERT_FAIL, CONFERENCE_ALL_REQUEST, CONFERENCE_ALL_SUCCESS, CONFERENCE_ALL_FAIL } from '../constants/conferenceConstant.js'

export const conferenceInsertReducer = (state = {}, action) => {
    switch (action.type) {
        case CONFERENCE_INSERT_REQUEST:
            return { loading: true }
        case CONFERENCE_INSERT_SUCCESS:
            return { loading: false, conferenceInfo: action.payload }
        case CONFERENCE_INSERT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}

export const conAllReducer = (state = { conference: [] }, action) => {
    switch (action.type) {
          case  CONFERENCE_ALL_REQUEST:
                return { loading: true }
          case CONFERENCE_ALL_SUCCESS:
                return { loading: false, conference: action.payload }
          case CONFERENCE_ALL_FAIL:
                return { loading: false, error: action.payload }
          default:
                return state
    }
}