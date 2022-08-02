import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./actionTypes"

const init ={
    loading:false,
    errors:null,
    users:null,
    token:null,
    isAuth:false
}

const reducer = (state = init, {type, payload}) => {
    switch (type) {
      case REGISTER:
      case LOGIN:
      case GET_PROFILE:
        return {
          ...state,
          loading: true,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          users: payload,
          errors: null,
        };
        case LOGIN_SUCCESS:{
          return {
            ...state,
            loading:false,
            errors:null,
            token:payload.token,
            users:payload.user,
          };
        }
        case GET_PROFILE_SUCCESS:
          return {
            loading:false,
            users:payload,
            isAuth:true,
          }
      case REGISTER_FAIL:
        case LOGIN_FAIL:
          case GET_PROFILE_FAIL:
        return {
            ...state,
            loading: false,
            errors: payload,
          };
          
          default:
      return state;
  }
};
export default reducer