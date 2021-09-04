const rootReducer = (state = "", action) => {
    switch (action.type) {
        case "LOGIN_AUTH": return { ...state, user: action.payload }
        case "Invalid": return { ...state, user: action.payload }
        default:
            return state;
    }
}
export default rootReducer;