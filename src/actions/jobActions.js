import axios from 'axios';
import { FETCH_JOBS } from '../types';
import reverseGeoCode from 'latlng-to-zip';
import qs from 'qs';

const JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript' // type of job
}

const JOBS_BASE_URL = 'http://api.indeed.com/ads/apisearch'

const buildJobsUrl = (zipCode) => {
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zipCode }) // location as l with zip code
    return `${JOBS_BASE_URL}?${query}`
}

export const fetchJobs = (region) => async (dispatch) => {
    try {
        const zipCode = await reverseGeoCode(region);
        const url = buildJobsUrl(zipCode)
        const { data } = await axios.get(url);
        dispatch({
            type: FETCH_JOBS,
            payload: data
        });
    }
    catch (error) {
        console.error(error);
    }
}