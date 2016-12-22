
import { combineEpics } from 'redux-observable';
import user from './user';
import location from './location';
import app from './app';
import space from './space';

export { user, location, app, space }

export default combineEpics(
  user, location, app, space
);
