import { ADD } from '../actions/appActions';

export const validateAuthorMiddleware = store => next => action => {
  console.log('Jesteśmy w middlewarze :) ');

  next(action);
}