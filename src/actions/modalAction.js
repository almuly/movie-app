import { createActions } from 'redux-actions';

export const {
  openModal,
  closeModal,
} = createActions(
  'OPEN_MODAL',
  'CLOSE_MODAL',
);
