export const UPDATE_PROVINCE_DATA = 'UPDATE_PROVINCE_DATA'
export const RESET_PROVINCE_DATA = 'RESET_PROVINCE_DATA'

export const updateProvinceData = (provinceName, newData) => ({
  type: UPDATE_PROVINCE_DATA,
  payload: { provinceName, newData },
})

export const resetProvinceData = () => ({
  type: RESET_PROVINCE_DATA,
})
