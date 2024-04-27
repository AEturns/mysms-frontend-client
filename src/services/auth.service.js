import { CLIENT_TOKEN } from 'src/common/const'
import TokenService from './TokenService'
import { algoAxiosInstance, axiosInstance } from 'src/common/AxiosInstance'

export const AuthService = {
  registerUser: async (data) => {
    try {
      const response = await axiosInstance.post('/user-register', data)
      return response.data
    } catch (error) {
      throw error
    }
  },
  updateUser: async (id, data) => {
    try {
      const response = await axiosInstance.patch('/user-register/' + id, data)
      return response.data
    } catch (error) {
      throw error
    }
  },

  getUsersAll: async () => {
    try {
      const response = await axiosInstance.get('/user-register')
      return response.data
    } catch (error) {
      throw error
    }
  },

  getUser: async (id) => {
    try {
      const response = await axiosInstance.get('/user-register/' + id)
      return response.data
    } catch (error) {
      throw error
    }
  },


  login: async (username, password) => {
    try {

      const response = await axiosInstance.post('/auth/local', {
        identifier: username,
        password,
      })
      if (response.data.jwt) {


        // TokenService.setUser({...response.data, clientData: clientData.data.data[0]})
      }
      return response.data
    } catch (error) {
      throw error
    }
  },

  logout: async () => {
    TokenService.removeUser()
  },

  getCurrentUser: () => {
    TokenService.getUser()
  },
}
