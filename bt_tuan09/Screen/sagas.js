import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure, addJobRequest, editJobRequest } from './jobSlice';

function* fetchJobsSaga() {
  try {
    const response = yield call(axios.get, 'https://67219f5898bbb4d93ca901a3.mockapi.io/task');
    yield put(fetchJobsSuccess(response.data));
  } catch (error) {
    yield put(fetchJobsFailure());
  }
}

function* addJobSaga(action) {
  try {
    yield call(axios.post, 'https://67219f5898bbb4d93ca901a3.mockapi.io/task', { title: action.payload });
    yield put(fetchJobsRequest());
  } catch (error) {
    yield put(fetchJobsFailure());
  }
}

function* editJobSaga(action) {
  try {
    const { id, title } = action.payload;
    yield call(axios.put, `https://67219f5898bbb4d93ca901a3.mockapi.io/task/${id}`, { title });
    yield put(fetchJobsRequest());
  } catch (error) {
    yield put(fetchJobsFailure());
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchJobsRequest.type, fetchJobsSaga);
  yield takeLatest(addJobRequest.type, addJobSaga);
  yield takeLatest(editJobRequest.type, editJobSaga);
}
