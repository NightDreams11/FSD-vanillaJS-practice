import { state } from "../../../enteties/store/store"
import { authAPI } from "../api/api"
import { navigate } from "../../../app/routes/routes"

export const login = async (email: string, password: number) => {
  const response: any = await authAPI.login(email, password)
  const data = await response.json()

  if (data.resultCode === 0) {
    state.setUser(data)
    navigate("/home")
  }
}

export const register = () => {
  console.log("register")
}
