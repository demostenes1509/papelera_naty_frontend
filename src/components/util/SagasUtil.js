import { call, put } from 'redux-saga/effects'
import co from 'co';

export default co.wrap(function* (actions,api) {

  console.log('MEC>1');
  try {
    console.log('MEC>2');
    yield put(actions.fetchLoading())
    console.log('MEC>2.1 ');
    const response = yield call(api.fetch)

    console.log('MEC>3'); 

    if (response.status === 200) {
      console.log('success - fetchSidebar: ', response.data);
      yield put(actions.fetchSuccess(response.data))
    } else {
      // yield put(Actions.reviewLokalError(''))
      console.log('fetchSidebar fail: ', response)
    }
    console.log('MEC>4');

  } catch (err) {
    console.log('error - fetchSidebar: ', err)
    // yield put(Actions.reviewLokalError(''))
  }


})

