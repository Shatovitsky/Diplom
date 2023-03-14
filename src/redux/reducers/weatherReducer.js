import { FETCH_USERS } from '../../constants';

const initialState = {
  data: '123',
};
export const GET_CURRENT_LOCATION_SUCCEEDED = 'GET_CURRENT_LOCATION_SUCCEEDED';
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_LOCATION_SUCCEEDED:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default userReducer;
