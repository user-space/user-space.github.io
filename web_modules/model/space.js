import { space } from 'event'

const initialState = {
    list : [],
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case space.LIST :
        case space.LIST_FAIL :
            return {
                ...state,
                list : []
            };
        case space.LIST_OK :
            return {
                ...state,
                list : action.payload,
            }
        default : return state;
  }
}
