import { FetchCardsEvents, GetNewDeckAction, StoreDeckId } from "./types";

export const getNewDeckAction = (): GetNewDeckAction => ({
  type: FetchCardsEvents.getNewDeck
});

export const setStackID = (deckId: string): StoreDeckId => ({
  type: FetchCardsEvents.storeDeckId,
  payload: deckId
});
