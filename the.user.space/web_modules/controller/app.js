import { Observable } from 'rxjs';
import { app } from 'event';
import {userspace, topapps} from 'userspace-sdk-js'
import jws from 'jws'

const Parse = userspace()
const App = Parse.Object.extend("App");
const query = new (Parse.Query)(App);

const checkurl = (url) => fetch(`https://gateway.user.space/cors/${new Buffer(url).toString('base64')}`,
  {headers: {
    Authorization: `Bearer ${localStorage.id_token}`
  }})
  .then(res => res.json())
  .catch(error => ({ ok: false, error }))
  .then(json => ({ ...json, url} ))

export default (action$) =>
  Observable.merge(

    action$.ofType(app.LIST)
        .flatMap(action => topapps() )
        .map(result => ({
          type: app.LIST_OK,
          payload: result,
        }))
        .catch(error => Observable.of({
            type: app.LIST_FAIL,
            payload: error.xhr.response,
            error: true
        }))
        ,
    action$.ofType("@@redux-form/CHANGE")
        .filter(action => action.meta.field === "url")
        .debounce(() => Observable.timer(500) )
        .map(action => action.payload)
        .filter(url => url.match(/^https?:\/\//))
        .map(url => ({type: app.GET_INFO, payload: url}))
        ,
    action$.ofType(app.GET_INFO)
        .flatMap(action => checkurl(action.payload))
        .map(res => ({type: res.ok ? app.GET_INFO_OK : app.GET_INFO_FAIL, payload: {manifest: res.manifest, url: res.url}}))
        ,
    // action$.ofType(app.CREATE)
    //     .map(action => ({...action, payload : {...action.payload, signature: jws.sign()} }) )
    //     ,
  )
