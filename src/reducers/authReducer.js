import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from '../types';

export default function (state = {}, action) {
    switch (action.type) {
        case FACEBOOK_LOGIN_SUCCESS:
            return { ...state, token: action.payload }
        case FACEBOOK_LOGIN_FAIL:
            return { ...state, token: null }
        default:
            return state
    }
}