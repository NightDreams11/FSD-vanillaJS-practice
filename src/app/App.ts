import { Router } from "./routes/index"

export const App = () => {
  return Router()
}
const root = document.getElementById("root")

export const updateTree = () => {
  while (root?.firstChild) {
    root.removeChild(root.firstChild)
  }

  root?.appendChild(App())
}

// TODO: Write a good update for a DOM. Now I have to click outside
// of the button before click on the button for refreshing the state.
updateTree()

// Just updating tree if click on the backward button in browser.
window.onpopstate = () => {
  updateTree()
}
