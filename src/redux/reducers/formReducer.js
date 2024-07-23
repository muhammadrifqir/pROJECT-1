const initialState = {
  province: '',
  status: '',
  count: '',
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        [action.field]: action.value,
      }
    case 'RESET_FORM_DATA':
      return initialState
    default:
      return state
  }
}

export default formReducer
