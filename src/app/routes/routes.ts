import { LoginPage } from "../../pages/Login/index"
import { HomePage } from "../../pages/Home/index"
import { Page404 } from "../../pages/Page404/index"
import { RegisterPage } from "../../pages/Register/index"
import { updateTree } from "../App"

export const Router = () => {
  const routes = [
    {
      path: "/404",
      view: Page404,
    },
    {
      path: "/login",
      view: LoginPage,
    },
    {
      path: "/register",
      view: RegisterPage,
    },
    {
      path: "/home",
      view: HomePage,
    },
  ]

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    }
  })

  let match = potentialMatches.find(
    (potentialMatches) => potentialMatches.isMatch
  )

  if (location.pathname === "/") {
    navigate("/login")
    history.pushState(null, "", "/login")
    match = {
      route: routes[1],
      isMatch: true,
    }
  }

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    }
  }

  return match.route.view()
}

export const navigate = (url: string) => {
  history.pushState(null, "", url)
  Router()
  updateTree()
}

document.body.addEventListener("click", (e: any) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault()
    navigate(e.target.href)
    updateTree()
  }
})
