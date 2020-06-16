import { createActions } from 'redux-actions';


export const { startLoader, endLoader } = createActions(
  'START_LOADER',
  'END_LOADER',
);
