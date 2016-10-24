import { app } from 'event'

const initialState = {
    list : [],
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case app.LIST :
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
