import { LIKE_JOB } from '../types';

export default function (state = [], action) {
    switch (action.type) {
        case LIKE_JOB: {
            if (state.likedJobs) {
                const existingJob = state.likedJobs.find((job) => {
                    return job.id === action.payload.id
                })
                if (!existingJob) {
                    return { ...state, likedJobs: [...state.likedJobs, action.payload] }
                } else {
                    return state
                }
            } else {
                return { ...state, likedJobs: [action.payload] }
            }
        }
        default:
            return state;
    }
}