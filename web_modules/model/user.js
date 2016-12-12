import { user } from 'event'
import { localToken } from 'lib/userspace'

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
                token : state.token.clear()
            };
        case user.LOGOUT :
            return {
                ...state,
                profile : ANON_USER,
                token : state.token.clear()
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
                token : state.token.clear()
            }
        default : return state;
  }
}
