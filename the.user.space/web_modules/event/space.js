import namesGenerator from "lib/namesGenerator"

const events = namesGenerator({
    namespace: "event/space",
    actions: ["LIST","SIZE"]
})


export function list() {
    return { type : events.LIST }
}
export function size() {
    return { type : events.SIZE }
}


export default events;
