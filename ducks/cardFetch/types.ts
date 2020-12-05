import { Action } from "redux";

export enum FetchCardsEvents {
  getNewDeck = "GET_NEW_DECK",
  getCardFromDeck = "GET_CARD_FROM_DECK",
  storeDeckId = "STORE_DECK_ID"
}

export interface GetNewDeckAction extends Action {
  type: FetchCardsEvents.getNewDeck;
}

export interface StoreDeckId extends Action {
  type: FetchCardsEvents.storeDeckId;
  payload: string;
}

export type FetchCardsTypes = GetNewDeckAction | StoreDeckId;
