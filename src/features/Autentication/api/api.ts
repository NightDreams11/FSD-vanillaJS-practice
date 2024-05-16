class AuthAPI {
  private baseURL: string

  constructor() {
    this.baseURL = "https://social-network.samuraijs.com/api/1.0"
  }

  // async fetchData<T>(endpoint: string): Promise<T> {
  //   try {
  //     const response = await fetch(`${this.baseURL}/${endpoint}`)
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`)
  //     }
  //     return (await response.json()) as T
  //   } catch (error) {
  //     console.error("Error fetching data:", error)
  //     throw error
  //   }
  // }

  async me() {
    const response = await fetch(`${this.baseURL}/auth/me`, {
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "API-KEY": "4e078e26-7b0e-477a-9a26-66473c5449f5",
      },
    })
    return response
  }

  async login(
    email: string,
    password: number
    // rememberMe = false,
    // captcha: null | string = null
  ) {
    const response = await fetch(`${this.baseURL}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "API-KEY": "4e078e26-7b0e-477a-9a26-66473c5449f5",
      },
      credentials: "same-origin",
      body: JSON.stringify({
        email,
        password,
      }),
    })

    return response
  }

  async logout() {
    const response = await fetch(`${this.baseURL}/auth/login`, {
      method: "DELETE",
    })
    return response
  }
}

export const authAPI = new AuthAPI()
