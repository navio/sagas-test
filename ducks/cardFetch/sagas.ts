import { takeAll, takeEvery } from "redux-saga";
import { FetchCardsEvents } from "./types";
// import debug from "debug";
// const log = debug("saga:fetch");

function* getNewDeck() {
  // Make an API Request
  // log("requesting api");
}

function* listenForNewDeck() {
  yield takeEvery(FetchCardsEvents.getNewDeck, getNewDeck());
}

export default function*() {
  yield takeAll([listenForNewDeck()]);
}
