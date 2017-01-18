import { Observable } from 'rxjs';
import { replace } from 'react-router-redux';
import { user } from 'event';

const secured = ['/home']

export default (action$, store) => {
  return Observable.merge(
    action$.ofType(user.LOGIN_OK)
           .map(action => replace('/')),

    action$.ofType(user.LOGOUT)
      .do((action) => {
          localStorage.clear();
          window.location = "/";
          return action;
        })
      .ignoreElements(),

  )
}
