import { user } from 'event'

import { localToken, localProfile } from 'lib/auth0'

const ANON_USER = { name: 'anon' , avatar: 'none'}
const previous = {
  token : localToken(),
  profile : localProfile()
};
const initialState = {
    loading : false,
    token : previous.token ,
    id : !previous.profile? ANON_USER : previous.profile.user_id,
    profile : (!previous.profile? ANON_USER : {
        name : previous.profile.nickname,
        avatar : previous.profile.picture,
    })
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
