import { put, call, takeEvery } from '@redux-saga/core/effects';

import { currentData } from '../../API/weather';
import { GET_CURRENT_LOCATION_REQUESTED } from '../../constants';
import { Succeeded, Requested, Failed } from '../actions/weather';

function* fetchUserPosts(action) {
  try {
    const currentLocation = yield call(currentData, action.payload);
    yield put({
      type: Succeeded,
      payload: {
        data: currentLocation,
      },
    });
  } catch (e) {
    yield put({
      type: Failed,
      payload: {
        message: e.message,
      },
    });
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_CURRENT_LOCATION_REQUESTED, fetchUserPosts);
}
