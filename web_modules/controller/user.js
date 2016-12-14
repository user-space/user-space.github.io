import { Observable } from 'rxjs';
import { user } from 'event';
import { signin, signout } from 'lib/userspace'
import { replace } from 'react-router-redux';


export default (action$) =>
  Observable.merge(

    action$.ofType(user.LOGOUT)
      .do(action => signout())
      .ignoreElements(),

    action$.ofType(user.LOGIN)
      .flatMap(action => signin())
      .map(result => ({
        type: user.LOGIN_OK,
        payload: result,
      }))
      .catch(error => Observable.of({
          type: user.LOGIN_FAIL,
          payload: error.xhr.response,
          error: true
      }))

  )
