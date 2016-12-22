import namesGenerator from "lib/namesGenerator"


const events = namesGenerator({
    namespace: "event/user",
    actions: ["LOGIN","LOGOUT"]
})

export function login() {
    return { type : events.LOGIN }
}

export function logout() {
    return { type : events.LOGOUT }
}


export default events;
