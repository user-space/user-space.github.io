import namesGenerator from "lib/namesGenerator"

const events = namesGenerator({
    namespace: "event/app",
    actions: ["LIST","DELETE", "CREATE", 'GET_INFO', 'EDIT', 'RELOAD']
})


export function list() {
    return { type : events.LIST }
}

export function edit() {
    return { type : events.EDIT }
}

export function remove(id) {
    return { type : events.DELETE, payload: {app: id} }
}

export function create(payload) {
    return { type : events.CREATE, payload }
}

export function reload(payload) {
    return { type : events.RELOAD, payload }
}

export default events;
