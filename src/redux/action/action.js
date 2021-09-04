export const LoginUser = (body) => {
    return async (dispatch) => {
        if (body.id == '1234' && body.password == '1234') {
            dispatch({ type: 'LOGIN_AUTH', payload: [body] })
        } else {
            dispatch({ type: 'Invalid', payload: "Invalid credential" })
        }

    }
}

