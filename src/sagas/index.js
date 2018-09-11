import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchBooks() {

  // const user = yield call();
  const response = yield axios.get('http://api.nytimes.com/svc/books/v3/lists/overview.jsonp?callback=foobar&api-key=2bdd0422f9e74a559f0f5200fa83505b');
  const res = JSON.parse(response.data.slice(response.data.indexOf('{'), -2));
  yield put({ type: "UPDATE_BOOKS", payload: res.results.lists });
}

function* mySaga() {
  yield takeEvery("FETCH_BOOKS", fetchBooks);
}

export default mySaga;