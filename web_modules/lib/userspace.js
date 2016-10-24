import Parse from 'parse'

Parse.initialize("userspace")
Parse.serverURL = `http://localhost:1337/main`
Parse.login = (creds) => {
    Parse.credentials = creds
}
Parse.logout = () => {
    Parse.credentials = null
}

Parse.login(localStorage.id_token)

export {
    Parse
}
