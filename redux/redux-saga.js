import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { apiData } from './api';



function* getAPIData(type = 'GET_DATA') {

   try {
      const data = yield call(apiData(), {});
      // const data = yield apiData();

      // console.log(data);

      yield put({type: 'DATA_SUCCESS', data });
   } catch (e) {
      console.log(e);
      yield put({type: 'DATA_FAILURE', error: e.message });
   }
}


function* reduxSaga() {

  yield takeLatest("GET_DATA", getAPIData);
}

export default reduxSaga;