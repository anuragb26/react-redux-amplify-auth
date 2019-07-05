import * as actions from "../actions";
export const initialState = {
  user: {},
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_SUCCESS: {
      return {
        user: { ...state.user, ...action.payload }
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
