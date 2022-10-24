import { API_PATH } from "../config"

const logout = async (idUser, token) => {
    const response = await fetch(`${API_PATH}auth/logout`, {
        method: 'POST',
        body: JSON.stringify({idUser: idUser, token: token}),
      })
      const result = await response.json()
      return result
}

export default logout