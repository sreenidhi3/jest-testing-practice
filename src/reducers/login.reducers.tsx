interface ReducerAction {
  type: string;
  payload: string;
}
interface LoginState {
  token: string;
}
const initialState: LoginState = {
  token: ""
};

const loginReducer = (state = initialState, action: ReducerAction) => {
  // console.log("from loginReducer", action);
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
