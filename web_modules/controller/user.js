import { Observable } from 'rxjs';
import { user } from 'event';
import * as auth from 'lib/auth0'
import { replace } from 'react-router-redux';


export default (action$) =>
  Observable.merge(

    action$.ofType(user.LOGOUT)
      .do(action => auth.logout())
      .ignoreElements(),

    action$.ofType(user.LOGIN)
      .flatMap(action => auth.login())
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
