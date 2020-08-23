import { authAPI } from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const getAuthUserData = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            let { id, login, email } = data.data;
            dispatch(toggleIsFetching(false));
            dispatch(setAuthUserData(id, email, login));
        }
    });
}

export default authReducers;
