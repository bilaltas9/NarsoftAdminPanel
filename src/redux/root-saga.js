import { all } from 'redux-saga/effects';
import authSagas from '@iso/redux/auth/saga';
import notesSagas from '@iso/redux/notes/saga';
import todosSagas from '@iso/redux/todos/saga';
import cardsSagas from '@iso/redux/card/saga';
import articles from '@iso/redux/articles/sagas';
import investors from '@iso/redux/investors/sagas';
import profileSaga from '@iso/redux/profile/saga';
import quizSaga from '@iso/redux/quiz/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    notesSagas(),
    todosSagas(),
    cardsSagas(),
    articles(),
    investors(),
    profileSaga(),
    quizSaga(),
  ]);
}
