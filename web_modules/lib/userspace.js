import Parse from 'parse'
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
        Parse.session = {
            client : decode(creds).aud
        }
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

export {
    urls, userspace
}
