let defaultState = {
    users: [{
        username : "user",
        password : "user",
        nama : "User Bioskop",
    }]
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SAVE_REGISTER":
            let newData = {
                username: action.payload.username,
                password: action.payload.password,
                nama: action.payload.nama
            }
            
            let data = {}

            if (state.users.length === 0) {
                data = state.users.concat(newData)
                data = state.users.concat(newData)
            } else {
                data = state.users.concat(newData)
            }

            console.log(data)
            return {
                users: data
            }

            case "CLEAR_DATA":
                return defaultState
            default:
                return state
    }
}

export default userReducer