import "./AuthForm.css"

type AuthForm = (
  title: string,
  loginInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
  button: HTMLButtonElement
) => Node

export const AuthForm: AuthForm = (
  title,
  loginInput,
  passwordInput,
  button
) => {
  const container = document.createElement("div")
  const formContainer = document.createElement("div")
  const form = document.createElement("form")
  const p = document.createElement("p")

  //classes
  container.classList.add("auth-form__container")
  formContainer.classList.add("auth-form__form-container")
  form.classList.add("auth-form__form")

  //layout
  p.innerText = title

  //form
  form.appendChild(p)
  form.appendChild(loginInput)
  form.appendChild(passwordInput)
  form.appendChild(button)

  container.appendChild(formContainer)
  formContainer.appendChild(form)

  return container
}
