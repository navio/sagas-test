import React from "react";
import { connect } from "react-redux";
import { DefaultState } from "./ducks/cardFetch/reducer";
import { getNewDeckAction } from "./ducks/cardFetch/actions";
const application = ({ name, deckId, getDeck }) => {
  return (
    <h1>
      {!deckId && <div onClick={() => getDeck()}>No DeckID</div>}
      Hello {name} - {deckId}!
    </h1>
  );
};

const mapStateToProps = (state: { cards: DefaultState }) => ({
  ...state.cards
});
const mapDispatchToProps = dispatch => {
  return {
    getDeck: () => dispatch(getNewDeckAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(application);
