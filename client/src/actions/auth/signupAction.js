import actionTypes from '../actionTypes';

export const signupAction = () => (dispatch) => {
  dispatch({ type: actionTypes.SIGNUP_SUCCESSFUL });
};
