import { Observable } from 'rxjs';
import { app } from 'event';
import {userspace, topapps} from 'userspace-sdk-js'
import jws from 'jws'
import { encode as toUrl64} from "base64url";

const Parse = userspace()
const App = Parse.Object.extend("App");
const query = new (Parse.Query)(App);

const checkurl = (url) => fetch(`https://gateway.user.space/cors/${toUrl64(url)}`,
  {headers: {
    Authorization: `Bearer ${localStorage.id_token}`
  }})
  .then(res => res.json())
  .catch(error => ({ ok: false, error }))
  .then(json => ({ ...json, url} ))

const sign = (body) => fetch(`https://gateway.user.space/signature/new`,
  {body: JSON.stringify(body), method: 'post', headers: {
    Authorization: `Bearer ${localStorage.id_token}`,
    'Content-Type': 'application/json',
  }})
  .then(res => res.json())
  .catch(error => ({ ok: false, error }))

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
    action$.ofType(app.RELOAD)
        .flatMap(action => checkurl(action.payload))
        .map(res => ({type: res.ok ? app.RELOAD_OK : app.RELOAD_FAIL, payload: {manifest: res.manifest, url: res.url}}))
        ,
    action$.ofType(app.CREATE)
        .flatMap(action => Observable.zip( sign({
          name: action.payload.name,
          description: action.payload.description,
          image: action.payload.image,
          url: action.payload.url,
        }), (signature) => ({
          ...action.payload,
            signature
        }) ))
        .mergeMap(res => Observable.merge(
          Observable.of({ type: app.CREATE_OK, payload: res }),
          Observable.of({ type: app.RELOAD, payload: res.url })
        ))
        ,
  )
