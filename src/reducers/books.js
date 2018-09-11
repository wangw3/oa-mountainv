export default function (state = [], action) {
    switch (action.type) {
        case "UPDATE_BOOKS":
            return action.payload;
        default:
            return state;
    }
}