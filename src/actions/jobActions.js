import axios from 'axios';
import { FETCH_JOBS } from '../types';
import data from '../data/jobs.json';
import { navigate } from '../config/navigationRef';

export const fetchJobs = (region) => async (dispatch) => {
    console.log('data', data)
    dispatch({
        type: FETCH_JOBS,
        payload: data
    });

    navigate('Deck')
}