const merge = require("lodash/fp/merge")

let state = {
  email: "",
  password: "",
  gameworldName: "",
  msid: "",
  cookies: "",
  lobbySession: "",
  gameworldSession: "",
  cronJob: {
    isRunning: false,
    job: null
  },
  scheduleAttacks: [],
  farmlists: [],
  isDual: false,
  avatarName: ""
}

if (process.env.NODE_ENV == "development") {
  state.email = process.env.EMAIL
  state.password = process.env.PASSWORD
  state.gameworldName = process.env.GAMEWORLD_NAME
  state.msid = process.env.MSID
  state.cookies = process.env.COOKIES
  state.lobbySession = process.env.LOBBY_SESSION
  state.gameworldSession = process.env.GAMEWORLD_SESSION
  state.isDual = process.env.IS_DUAL == "false" ? false : true
  state.avatarName = process.env.AVATAR_NAME
}

function getState() {
  return state
}

function setState(newState) {
  state = merge(state, newState)
}

module.exports = { getState, setState }
