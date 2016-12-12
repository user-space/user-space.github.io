import { Observable } from 'rxjs';
import { space, user } from 'event';
import {userspace, size} from 'lib/userspace'

const Parse = userspace('main')
const Space = Parse.Object.extend("Space");
const query = new (Parse.Query)(Space);

export default (action$,store) =>
  Observable.merge(
    action$.ofType(space.LIST)
        .flatMap(action => size())
        .map(result => ({
            type: space.SIZE_OK,
            payload: result
        })),

    action$.ofType(space.LIST)
        .flatMap(action => query.limit(10).addDescending("createdAt").find() )
        .map(result => ({
          type: space.LIST_OK,
          payload: result,
        }))
        .catch(error => Observable.of({
            type: space.LIST_FAIL,
            payload: error.xhr.response,
            error: true
        })),

    action$.ofType(user.LOGIN_OK)
        .do(action => Parse.login(store.getState().user.token.token))
        .ignoreElements(),

        // action$.ofType(user.DELETE)
        //   .flatMap(action => auth.login())
        //   .map(result => ({
        //     type: user.LOGIN_OK,
        //     payload: result,
        //   }))
        //   .catch(error => Observable.of({
        //       type: user.LOGIN_FAIL,
        //       payload: error.xhr.response,
        //       error: true
        //   }))

  )
