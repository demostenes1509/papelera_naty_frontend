
function * fetchSidebar () {
  try {
    yield put(Actions.fetchSidebarLoading())
    const response = yield call(SidebarApi.fetchSidebar)

    if (response.status === 200) {
      console.log('success - fetchSidebar: ', response.data);
      yield put(Actions.fetchSidebarSuccess(response.data))
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
  fetchSidebar
}