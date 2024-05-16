import { AuthForm } from "./AuthForm"
import { login, register } from "../model/model"
import { Input } from "../../../shared/Input/Input"
import { state } from "../../../enteties/store/store"
import { Button } from "../../../shared/Button/Button"

export const AuthLayout = () => {
  const loginInput = Input({
    type: "text",
    name: "login",
    value: state.login,
    placeholder: "Login",
    onchange: state.getLogin,
  })

  const passwordInput = Input({
    type: "password",
    name: "password",
    value: state.password,
    placeholder: "Password",
    onchange: state.getPassword,
  })

  const button = Button({
    textContent: "Click",
    type: "button",
    onclick: async (ev: MouseEvent) => {
      if (location.pathname === "/login") {
        await login(state.login, Number(state.password))
      } else {
        await register()
      }
    },
  })

  if (location.pathname === "/login") {
    const Form = AuthForm("Login page", loginInput, passwordInput, button)
    return Form
  } else {
    const Form = AuthForm("Register page", loginInput, passwordInput, button)
    return Form
  }
}
