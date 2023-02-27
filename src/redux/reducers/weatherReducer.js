const initialState = {
  city: 234,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_WEATkuhhHER_NAVIGATOR':
      return { ...state, city: state.city };
    default:
      return state;
  }
};

export default weatherReducer;
