import decode from 'jwt-decode';
import request from 'superagent'

const base = "http://user.space"

const urls = {
    dashboard : (token) => `${base}/login/?token=${token}`
}
function userspace(namespace) {
    const Parse = require('parse')
    Parse.initialize("userspace")
    Parse.serverURL = `${base}/${namespace}`
    Parse.login = (creds) => {
        Parse.credentials = creds
        if (!Parse.credentials) return;
        Parse.session = {}
        try {
            Parse.session.client = decode(creds).aud
        } catch (e) {}

        request.get(`${base}/apps`)
            .query({id : Parse.session.client })
            .then((res)=>{
                Parse.session.owner = res.body.owner
            })

    }
    Parse.logout = () => {
        Parse.credentials = null
    }

    const Notify = Parse.Object.extend("Notify")
    Parse.share = ({object, app, user}) => new Notify({
            ref : object.id,
            clazz : object.className,
            app : app || Parse.session.client,
            user : user || Parse.session.owner
        }).save()


    Parse.login(localStorage.id_token)
    return Parse;
}

const offsetSeconds = 5;

class Token {
  constructor(token) {
    this.token = token
  }
  isLoggedIn() {
    return !this.isTokenExpired()
  }
  isTokenExpired() {
    const date = this.getTokenExpirationDate()
    return date === null || !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)))
  }
  getTokenExpirationDate(){
    if (!this.token) return null;
    const decoded = decode(this.token)
    if(!decoded.exp) return null
    const date = new Date(0) // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp)
    return date
  }
  clear() {
    return new Token()
  }
}

function watchLogin() {
    const hasToken = window.location.search.match(/[\?&]token=(.*)[#&]?/)
    if (hasToken && hasToken.length === 2) {
        localStorage.id_token = hasToken[1]
        window.location = window.location.origin + window.location.pathname
    }
}

function signin(app) {
    app = new Buffer(app || window.location.origin + window.location.pathname).toString('base64')
    window.location = `${base}/sign/${app}`
}

function signout() {
    localStorage.id_token = ""
}

function localToken() {
    return new Token(localStorage.id_token)
}

function topapps() {
    return new Promise(ok =>
        fetch(`${base}/topapps`, {
            headers: {
                'Authorization': `Bearer ${localStorage.id_token}`,
            }
        }).then(
            res => res.json()
        ).then(
            res => ok(res)
        )
    )
}

function size() {
    return new Promise(ok =>
        fetch(`${base}/size`, {
            headers: {
                'Authorization': `Bearer ${localStorage.id_token}`,
            }
        }).then(
            res => res.json()
        ).then(
            res => ok(res)
        )
    )
}

export {
    urls, userspace, watchLogin, signin, signout, localToken, size, topapps
}
