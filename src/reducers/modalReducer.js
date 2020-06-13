import { handleActions } from "redux-actions";

// actions
import { openModal, closeModal } from "../actions";

// constants
import { modalState } from "../constants/defaultState";

const defaultPayload = { movieId: [], flag: false };

export default {
  modal: handleActions(
    {
      [openModal]: (state, { payload = defaultPayload }) => {
        const newState = { ...state, movieId: [...state.movieId] };
        newState.movieId.push(payload.movieId);
        newState.flag = true;

        return newState;
      },
      [closeModal]: (state, { payload = defaultPayload }) => {
        const newState = { ...state, movieId: [...state.movieId] };
        newState.movieId = newState.movieId.filter(
          (movieId) => movieId !== payload.movieId
        );
        newState.flag = false;

        return newState;
      },
    },
    modalState
  ),
};
