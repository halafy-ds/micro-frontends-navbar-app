/**
 * `auth` reducer
 */
import { ACTIONS } from "../constants";

const initialState = {
  isInitialized: false,
  tokenV2: null,
  tokenV3: null,
  profile: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AUTH.SET_TOKEN_V2:
      return {
        ...state,
        tokenV2: action.payload,
      };
    case ACTIONS.AUTH.SET_TOKEN_V3:
      return {
        ...state,
        tokenV3: action.payload,
      };
    case ACTIONS.AUTH.LOAD_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case ACTIONS.AUTH.SET_INITIALIZED:
      return {
        ...state,
        isInitialized: true,
      };
    default:
      return state;
  }
};

export default authReducer;
