import { updateTree } from "../../app/App"

type State = {
  login: string
  password: string
  isAuth: boolean
  user: {
    resultCode: number
    messages: string[]
    data: {
      userId: number
    }
  } | null

  getLogin: (e: Event) => void
  getPassword: (e: Event) => void
  setUser: (data: any) => void
}

export const state: State = {
  login: "",
  password: "",
  user: null,
  isAuth: false,

  getLogin: (e: Event) => {
    setState(() => (state.login = (e.target as HTMLInputElement).value))
  },

  getPassword: (e: Event) => {
    setState(() => (state.password = (e.target as HTMLInputElement).value))
  },

  setUser: (data: any) => {
    setState(() => (state.user = data))
  },
}

const setState = (callback: () => void) => {
  callback()
  updateTree()
}
