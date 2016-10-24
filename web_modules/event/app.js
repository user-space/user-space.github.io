import namesGenerator from "lib/namesGenerator"

const events = namesGenerator({
    namespace: "event/app",
    actions: ["LIST","DELETE"]
})


export function list() {
    return { type : events.LIST }
}

export function remove(id) {
    return { type : events.DELETE, payload: {app: id} }
}


export default events;
