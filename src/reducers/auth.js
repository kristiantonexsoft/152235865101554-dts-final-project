let defaultState = {
  isLogin: false,
  userLogin: {
    username : "",
    nama : ""
}
}
const authReducer = (state = defaultState, action) => {
  console.warn("state:", state);
  console.warn("action:", action);
  switch (action.type) {
      case "LOGIN_SUCCESS":
        console.log("object")
          return {
              isLogin: true,
              userLogin: {
                username: action.payload.userData.username,
                nama: action.payload.userData.nama
            }
          }

      case "LOGOUT_SUCCESS":
        console.log("object")
          return defaultState
     
      default:
          return state
  }

}

export default authReducer