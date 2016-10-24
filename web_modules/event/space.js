import namesGenerator from "lib/namesGenerator"

const events = namesGenerator({
    namespace: "event/space",
    actions: ["LIST"]
})


export function list() {
    return { type : events.LIST }
}


export default events;
