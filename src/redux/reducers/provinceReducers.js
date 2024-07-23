// reducers/provinceReducer.js

import {
  UPDATE_PROVINCE_DATA,
  RESET_PROVINCE_DATA,
} from '../actions/actionTypes'
import { provinces } from '../../utils/constants/provinces'

const initialState = {
  provinces: provinces,
}

const provinceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROVINCE_DATA:
      const { province, newData } = action.payload
      const updatedProvinces = state.provinces.map((prov) => {
        if (prov.kota === province) {
          return {
            ...prov,
            ...newData,
          }
        }
        return prov
      })
      return {
        ...state,
        provinces: updatedProvinces,
      }
    case RESET_PROVINCE_DATA:
      return {
        ...state,
        provinces: initialState.provinces,
      }
    default:
      return state
  }
}

export default provinceReducer
