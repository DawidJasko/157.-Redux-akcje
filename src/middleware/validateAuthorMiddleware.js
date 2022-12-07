import { ADD } from '../actions/appActions';

export const validateAuthorMiddleware =
  ({ dispath }) =>
  (next) =>
  ({ payload, type }) => {
    console.log('Jesteśmy w middlewarze :) ');
    if (type === ADD && !payload.author.lenght) {
      console.warn('Autor nie ma imienia i nazwiska');
      return;
    }

    next(action);
  };
