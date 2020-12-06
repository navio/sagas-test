import { FetchCardsEvents, FetchCardsTypes } from "./types";

export interface DefaultState {
  deckId?: string;
}
export const defaultState: DefaultState = {
  deckId: null
};

export default (
  state: DefaultState = defaultState,
  action: FetchCardsTypes
) => {
  switch (action.type) {
    case FetchCardsEvents.getNewDeck:
      return { ...state, deckId: "hello" };
    case FetchCardsEvents.storeDeckId:
      return { ...state, deckId: action.payload };
    default:
      return state;
  }
};
