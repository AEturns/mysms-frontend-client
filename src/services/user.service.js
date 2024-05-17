import { axiosInstance } from 'src/common/AxiosInstance'

export const UserService = {
  getUserDataByID: async (id) => {
    try {
      const response = await axiosInstance.get(`users?populate=*&filters[id][$eq]=${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  },
}
