import { FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOBS } from '../types';
import data from '../data/jobs.json';
import { navigate } from '../config/navigationRef';

export const fetchJobs = (region) => (dispatch) => {
    dispatch({
        type: FETCH_JOBS,
        payload: data
    });

    navigate('Deck')
}

export const likeJob = (job) => (dispatch) => {
    dispatch({
        type: LIKE_JOB,
        payload: job
    });
}

export const clearLikedJobs = () => (dispatch) => {
    dispatch({
        type: CLEAR_LIKED_JOBS
    });
}