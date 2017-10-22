import { makeReducer } from '../../utils/redux';
import * as actionTypes from './actionTypes';

const initialState = {
  pokemons: [],
};

const reducer = makeReducer(initialState, {

  [actionTypes.FETCH_CAMPAIGNS_BY_PROJECTS_IDS_SUCCESS]: (state, action) => ({
    ...state,
    pokemons: action.pokemons,
  }),

});

export default reducer;
