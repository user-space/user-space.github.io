import { space } from 'event'
import { user } from 'event'

const initialState = {
    list : [],
    total : 1,
    sizes : [],
    fill : 0,
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
                list : action.payload.map(ss=>({
                    id : ss.id,
                    app : ss.attributes.application.id,
                    name : ss.attributes.application.name,
                }))
            }
        case space.SIZE_OK :
            return {
                ...state,
                total : action.payload.total,
                fill : action.payload.dbs.reduce( (prev, curr) => prev + curr.size, 0 ),
                sizes : action.payload.dbs.map(db=>({
                    app: db.app,
                    size: db.size,
                }))
            }
        default : return state;
  }
  // <tr key={space.id}>
  //     <td><a href="#">{space.attributes.application.id}</a></td>
  //     <td>{space.attributes.application.name}</td>
  //     <td>12kb</td>
  //     <td>11/05/2016</td>
}
