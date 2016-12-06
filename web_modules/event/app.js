import namesGenerator from "lib/namesGenerator"

const events = namesGenerator({
    namespace: "event/app",
    actions: ["LIST","DELETE", "CREATE"]
})


export function list() {
    return { type : events.LIST }
}

export function remove(id) {
    return { type : events.DELETE, payload: {app: id} }
}

export function create(info) {
    return { type : events.CREATE, payload: info }
}

export default events;
