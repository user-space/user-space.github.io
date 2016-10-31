import { Observable } from 'rxjs';
import { app } from 'event';
import {userspace} from 'lib/userspace'

const Parse = userspace('main')
const App = Parse.Object.extend("App");
const query = new (Parse.Query)(App);


export default (action$) =>
  Observable.merge(

    action$.ofType(app.LIST)
        .flatMap(action => query.limit(10).addDescending("createdAt").find() )
        .map(result => ({
          type: app.LIST_OK,
          payload: result,
        }))
        .catch(error => Observable.of({
            type: app.LIST_FAIL,
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
