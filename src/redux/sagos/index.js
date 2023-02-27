import { put, call, takeEvery } from '@redux-saga/core/effects';

import GetCurrentLocation from '../../API/currentLocation';
import {
  GET_CURRENT_LOCATION_SUCCEEDED,
  GET_CURRENT_LOCATION_FAILED,
  GET_CURRENT_LOCATION_REQUESTED,
} from '../../constants';

function* fetchUserPosts(action) {
  try {
    const currentData = yield call(GetCurrentLocation, action.payload);
    yield put({
      type: GET_CURRENT_LOCATION_SUCCEEDED,
      payload: {
        data: currentData,
      },
    });
  } catch (e) {
    yield put({
      type: GET_CURRENT_LOCATION_FAILED,
      payload: {
        message: e.message,
      },
    });
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_CURRENT_LOCATION_REQUESTED, GetCurrentLocation);
}
