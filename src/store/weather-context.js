import React from "react"

const init = {
  auth: false,
  onLogin: () => {},
  onLogout: () => {},
}

const ctx = React.createContext(init)

export default ctx
