export const MAIN_API = process.env.REACT_APP_MAIN_API_URL
export const MESSAGE_SERVICE_API = process.env.REACT_APP_MESSAGE_SERVICE_API_URL

export const CLIENT_NAME = 'MySMS'
export const CLIENT_TOKEN = process.env.REACT_APP_CLIENT_TOKEN

export const MODAL_MSGES = {
  LOGIN_INVALID: 'No user found for this username/password!!',
  ERROR_MSG: 'Somthing Went Wrong!! Please Try Again.',
  SEARCH_NO_DATA_DOUND:
    "Sorry, we couldn't find any data matching your request!! Please check your search criteria or try again later.",
  NO_DATA_FOUND: 'No Data Found!! This might be because there is no data available at the moment',
  CAMPAIGN: {
    ADD_SUCCESS_MSG:
      "You've successfully created a new campaign to the system. The campaign details have been saved and are now available in the carousal.",
    UPDATE_SUCCESS_MSG:
      "You've successfully updated the campaign. The campaign details have been saved and are now available in the carousal.",
  },
}

export const PER_MSG_COST = 0.36

export const COLORS = {
  MAIN: '#406E84',
  SECONDARY: '#EB9D5D',
  MID_LIGHT: '#D2CFDF',
  LIGHT: '#FFF4EB',
  DANGER_BTN: '#C40202',
}
