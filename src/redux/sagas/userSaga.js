import { put, takeEvery, call } from '@redux-saga/core/effects';

import test from '../../API/getCurrentLocation';
import getDataWeather from '../../API/getDataWeather';
import { FETCH_USERS } from '../../constants';
import { Succeeded } from '../actions/weather';

function* fetchUserWorker() {
  try {
    const position = yield call(test);
    console.log('position', position);
    const weatherData = yield call(getDataWeather, position.coords);
    yield put(Succeeded(weatherData));
    console.log(weatherData);
  } catch (e) {
    console.log(e);
  }
}

function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}

export default userWatcher;
