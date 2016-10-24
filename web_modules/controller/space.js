import { Observable } from 'rxjs';
import { space } from 'event';
import { Parse } from 'lib/userspace'

const Space = Parse.Object.extend("Space");
const query = new (Parse.Query)(Space);


export default (action$) =>
  Observable.merge(

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
        }))

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
