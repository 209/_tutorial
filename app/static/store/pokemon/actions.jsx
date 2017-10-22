import { makeActionCreator } from '../../utils/redux';
import * as actionTypes from './actionTypes';

export const fetchCampaignsByProjectsIds = makeActionCreator(actionTypes.FETCH_CAMPAIGNS_BY_PROJECTS_IDS_REQUEST);
export const fetchCampaignsByProjectsIdsSuccess = makeActionCreator(actionTypes.FETCH_CAMPAIGNS_BY_PROJECTS_IDS_SUCCESS, 'campaigns');
export const fetchCampaignsByProjectsIdsFailure = makeActionCreator(actionTypes.FETCH_CAMPAIGNS_BY_PROJECTS_IDS_FAILURE);
