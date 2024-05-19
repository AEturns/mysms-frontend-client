import { axiosInstance, messageServiceInstance } from 'src/common/AxiosInstance'

export const CampaignService = {
  createCampaign: async (data) => {
    try {
      const response = await axiosInstance.post('/campaigns', data)
      return response.data
    } catch (error) {
      throw error
    }
  },
  uploadCampaignFile: async (data, id) => {
    try {
      const response = await axiosInstance.post('/import/csv/' + id, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (error) {
      throw error
    }
  },
  getCampaignAll: async () => {
    try {
      const response = await axiosInstance.get('/campaigns')
      return response.data
    } catch (error) {
      throw error
    }
  },
  getCampaign: async (id) => {
    try {
      const response = await axiosInstance.get('/campaigns/' + id)
      return response.data
    } catch (error) {
      throw error
    }
  },
  approveSendCampaign: async (campaignId, userId) => {
    try {
      const response = await messageServiceInstance.get(
        '/campaign/send-sms/' + campaignId + '/' + userId,
      )
      return response.data
    } catch (error) {
      throw error
    }
  },
}
