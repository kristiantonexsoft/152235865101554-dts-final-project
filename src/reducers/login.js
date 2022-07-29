let defaultState = {
    users: [{
        username : "user",
        password : "user",
        nama : "User Kuliner",
    }],
    komentar : [{
        nama : "Kristianto",
        komentar : "keliatannya enak bangettt...",
        tanggal : "",
        postingan : "komentar"
    },
    {
        nama : "Ikhlasul Amal",
        komentar : "gatahan liat masakannya...",
        tanggal : "",
        postingan : "komentar"
    },
    {
        nama : "Kristianto",
        komentar : "keliatannya enak bangettt...",
        tanggal : "",
        postingan : "request"
    },
    {
        nama : "Katrina Putri",
        komentar : "gatahan liat masakannya...",
        tanggal : "",
        postingan : "request"
    }
]
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

            return {
                users: data
            }

            case "SAVE_MASAKAN":

            let newData2 = {
                username: action.payload.username,
                password: action.payload.password,
                nama: action.payload.nama
            }
            
            let data2 = {}

            if (state.komentar.length === 0) {
                data2 = state.komentar.concat(newData2)
                data2 = state.komentar.concat(newData2)
            } else {
                data2 = state.komentar.concat(newData2)
            }

            return {
                komentar: data2
            }

            case "CLEAR_DATA":
                return defaultState
            default:
                return state
    }
}

export default userReducer