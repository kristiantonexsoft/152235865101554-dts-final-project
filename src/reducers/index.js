import {combineReducers } from "redux"
import AuthReducer from "./auth"
import UserReducer from "./login"
import KomentarReducer from "./komentar"

let reducer = combineReducers({
    AReducer: AuthReducer,
    UReducer: UserReducer,
    KReducer : KomentarReducer
})

export default reducer