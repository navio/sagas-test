import { all, takeEvery, put } from "redux-saga/effects";
import { FetchCardsEvents } from "./types";
import { setStackID } from "./actions";

function* getNewDeck() {
  // Make an API requestin
  try {
    const response = yield fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const data = yield response.json();
    const deckId = data.deck_id;
    yield put(setStackID(deckId));
  } catch (e) {
    // todo
  }
}

function* listenForNewDeck() {
  yield takeEvery(FetchCardsEvents.getNewDeck, getNewDeck);
}

export default function*() {
  yield all([listenForNewDeck()]);
}
