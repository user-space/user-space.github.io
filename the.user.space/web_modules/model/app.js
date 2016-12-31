import { app } from 'event'
import { user } from 'event'

const initialState = {
    list : [],
    info : {
      image : '/assets/img/default-avatar.png',
      name: undefined,
      description: undefined,
      url: 'https://my.user.space',
    },
    manifest: undefined,
    loaded: false,
    checking: false,
    done: false,
    signature: undefined
}

export default function reducer(state = initialState, action = {}) {
    const manifest = (action.payload||{}).manifest || {}
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
        case app.RELOAD:
        case app.GET_INFO:
            return {
                ...state,
                validated: false,
                checking : true,
            }
        case app.EDIT:
            return {
                ...state,
                done : false,
            }
        case app.CREATE_OK:
            const icons = (state.info.icons||[]).slice()
            if (!icons.find(element => element.src === action.payload.image)) {
              icons.unshift({src: action.payload.image, sizes: '96x96', type: 'image/png'})
            }
            return {
              ...state,
              info : {
                ...state.info,
                name: action.payload.name,
                description: action.payload.description,
                icons,
                userspace: action.payload.signature,
              },
              done: true,
            }
        case app.RELOAD_OK:
            const manifestAreEquals = (x,y) => JSON.stringify(x) === JSON.stringify(y);

            return {
              ...state,
              manifest: action.payload.manifest,
              validated: manifestAreEquals(state.info, action.payload.manifest),
              checking : false,
            }
        case app.GET_INFO_OK:
            return {
              ...state,
              url: action.payload.url,
              image: ((manifest.icons||[])[0]||{src:initialState.info.image}).src,
              info : {...manifest},
              manifest: action.payload.manifest,
              signature: manifest.userspace,
              loaded: true,
              done: false,
              checking : false,
            }
        case app.GET_INFO_FAIL:
            return {
              ...state,
              info : initialState.info,
              signature: undefined,
              loaded: false,
              checking : false,
            }
        default : return state;
  }
}
