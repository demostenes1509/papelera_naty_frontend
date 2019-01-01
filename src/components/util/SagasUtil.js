import { call, put } from 'redux-saga/effects'

function * defaultFetch (actions,api) {
  try {
    yield put(actions.fetchLoading())
    const response = yield call(api.fetch)

    if (response.status === 200) {
      console.log('success - fetchSidebar: ', response.data);
      yield put(actions.fetchSuccess(response.data))
    } else {
      // yield put(Actions.reviewLokalError(''))
      console.log('fetchSidebar fail: ', response)
    }
  } catch (err) {
    console.log('error - fetchSidebar: ', err)
    // yield put(Actions.reviewLokalError(''))
  }
}

export default {
  defaultFetch
}