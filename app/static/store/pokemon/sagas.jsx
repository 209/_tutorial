import { put, call, takeLatest, select, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { getPockemons } from '../../api/pokeapi';
import * as pokemonSelectors from './selectors';

function* getCampaigns() {
  try {
    // const state = yield select();
    // const projectsIds = EntitiesSelectors.getEmptyProjectsIds(state);
    //
    // if (!projectsIds.length) {
    //   return;
    // }
    // const response = yield fetchCampaignsStatsByProjectsIds(projectsIds);
    // const campaigns = (yield select()).entities.campaigns;
    // let result = response;
    //
    // if (campaigns.length) {
    //   result = mergeData(response, campaigns, 'project_id');
    // }
    //
    // yield put(actions.fetchCampaignsByProjectsIdsSuccess(result));

    // return {
    //   campaigns: result,
    // };
  } catch (err) {
    // yield put(actions.fetchCampaignsByProjectsIdsFailure());
    // return {};
  }
}

function* getCampaignsDelay() {
  yield delay(2000);
  yield call(getCampaigns);
}


export default function* entitiesSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_CAMPAIGNS_BY_PROJECTS_IDS_REQUEST, getCampaigns),
    takeLatest(actionTypes.FETCH_CAMPAIGNS_BY_PROJECTS_IDS_FAILURE, getCampaignsDelay),
  ]);
}
