import { app } from 'event'
import { user } from 'event'

const initialState = {
    list : [],
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case app.LIST :
        case user.LOGOUT: 
        case app.LIST_FAIL :
            return {
                ...state,
                list : []
            };
        case app.LIST_OK :
            return {
                ...state,
                list : action.payload,
            }
        default : return state;
  }
}
