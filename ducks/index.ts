import { combineReducers } from "redux";
import cardsReducer from "./cardFetch/reducer";
import cardsSagas from "./cardFetch/sagas";
import { all } from "redux-saga";

export const rootSaga = function* rootSaga() {
  yield all([cardsSagas()]);
};

export const rootStore = combineReducers({ cards: cardsReducer });
