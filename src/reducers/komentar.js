let defaultState = {
    komentar : [{
        nama : "Kristianto",
        komentar : "keliatannya enak bangettt...",
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

const komentarReducer = (state = defaultState, action) => {
    switch (action.type) {
            case "SAVE_MASAKAN":

            let newData2 = {
                nama : action.payload.nama,
                komentar : action.payload.komentar,
                tanggal : "",
                postingan : action.payload.postingan
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

            case "CLEAR_DATA_KOMENTAR":
                return defaultState
            default:
                return state
    }
}

export default komentarReducer