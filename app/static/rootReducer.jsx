import { combineReducers } from 'redux';
import app from './store/app';
import entities from './store/entities';

const mainReducer = combineReducers({
  app:      app.reducer,
  entities: entities.reducer,
});

const rootReducer = (state, action) => mainReducer(state, action);

export default rootReducer;
