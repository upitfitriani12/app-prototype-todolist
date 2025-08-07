import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchWeather } from '../../api/weather';
import {
  fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherFailure, setLoading
} from './todoSlice';

function* handleFetchWeather() {
  try {
    yield put(setLoading(true));
    const data = yield call(fetchWeather);
    yield put(fetchWeatherSuccess(data));
  } catch (error) {
    yield put(fetchWeatherFailure());
    console.error('Gagal ambil data cuaca:', error);
  } finally {
    yield put(setLoading(false));
  }
}

export default function* todoSaga() {
  yield takeLatest(fetchWeatherRequest.type, handleFetchWeather);
}
