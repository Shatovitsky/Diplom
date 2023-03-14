import { put, takeEvery, call } from '@redux-saga/core/effects';

import test from '../../API/getCurrentLocation';
import getDataWeather from '../../API/getDataWeather';
import { FETCH_USERS } from '../../constants';
import { Succeeded } from '../actions/weather';

function* fetchUserWorker() {
  const position = yield call(test);
  console.log(position);
  /* const weatherData = yield call(getDataWeather);
  yield put(Succeeded(weatherData));
  console.log(weatherData); */
}
function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}

export default userWatcher;
