import { FetchCardsEvents, GetNewDeckAction } from "./types";

export const getNewDeckAction = (): GetNewDeckAction => ({
  type: FetchCardsEvents.getNewDeck
});
