import { axiosInstance } from 'src/common/AxiosInstance'

export const UserService = {
  getUserDataByID: async (id, token) => {
    try {
      let response = null
      if (token)
        response = await axiosInstance.get(`users?populate=*&filters[id][$eq]=${id}`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        })
      else response = await axiosInstance.get(`users?populate=*&filters[id][$eq]=${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  },
}
