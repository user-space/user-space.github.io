import { space } from 'event'
import { user } from 'event'

const initialState = {
    list : [],
    total : 0,
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case space.LIST :
        case user.LOGOUT :
        case space.LIST_FAIL :
            return {
                ...state,
                list : initialState.list,
                total : initialState.total
            };
        case space.LIST_OK :
            return {
                ...state,
                list : action.payload,
            }
        case space.SIZE_OK :
            return {
                ...state,
                total : action.payload.size,
                fill : Object.keys(action.payload).reduce( (prev, curr) => "size" === curr ? prev : prev + action.payload[curr], 0 )
            }
        default : return state;
  }
}
