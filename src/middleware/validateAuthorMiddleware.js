import { ADD } from '../actions/appActions';

export const validateAuthorMiddleware =
  ({ dispath }) =>
  (next) =>
  (action) => {
    console.log('Jesteśmy w middlewarze :) ');
    if (action.type === ADD && !action.payload.author.length) {
      console.warn('Autor nie ma imienia i nazwiska');
      return;
    }

    next(action);
  };
