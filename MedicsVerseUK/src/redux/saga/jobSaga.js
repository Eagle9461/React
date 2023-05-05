import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { GET_JOB_REQUEST } from 'redux/constants';
import { getJobRequest } from 'redux/request';
import { getJobSuccess, getJobFailure } from 'redux/action/job';

function* getJsonData() {
  try {
    const filters = yield select(state => state.job.filters)
    const response = yield call(getJobRequest, "?type=jobs_filter", {  ...filters, location: filters.location.map(c => c.value) });
    if (response.data) {
      // pushNotification('Get data success', 'success', 'TOP_CENTER', 1000);
      yield put(getJobSuccess(response.data));
    }
  } catch (error) {
    //   pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
    yield put(getJobFailure());
  }
}

function* watchGetRequest() {
  yield takeLatest(GET_JOB_REQUEST, getJsonData);
}

export default function* jobSaga() {
  yield all([watchGetRequest()]);
}