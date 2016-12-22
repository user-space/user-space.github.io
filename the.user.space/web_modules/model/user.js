import { user } from 'event'
import { localToken } from 'userspace-sdk-js'

const ANON_USER = "anonymous"
const initialState = {
    loading : false,
    token : localToken(),
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case user.LOGIN :
            return {
                ...state,
                token : state.token.constructor.clear()
            };
        case user.LOGOUT :
            return {
                ...state,
                profile : ANON_USER,
                token : state.token.constructor.clear()
            }
        case user.LOGIN_OK :
            return {
                ...state,
                token : action.payload.token,
                id : action.payload.profile.user_id,
                profile : {
                    name : action.payload.profile.nickname,
                    avatar : action.payload.profile.picture
                }
            }
        case user.LOGIN_FAIL :
            return {
                ...state,
                token : state.token.constructor.clear()
            }
        default : return state;
  }
}
