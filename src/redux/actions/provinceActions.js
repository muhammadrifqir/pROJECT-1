import { UPDATE_PROVINCE_DATA, RESET_PROVINCE_DATA } from './actionTypes.js'

export const updateProvinceData = (province, newData) => ({
  type: UPDATE_PROVINCE_DATA,
  payload: { province, newData },
})

export const resetProvinceData = () => ({
  type: RESET_PROVINCE_DATA,
})
