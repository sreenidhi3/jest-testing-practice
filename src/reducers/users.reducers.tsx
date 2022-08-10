import { User } from "../types/users.types";

interface ReducerAction {
    type: string;
    payload: User[];
}
  
interface UserListState {
    users: User[]
}

const initialState: UserListState = {
    users: []
};

const userReducer = (state = initialState, action: ReducerAction) => {
    // console.log("from userReducer", action);
    switch (action.type) {
      case "SET_USERS_LIST":
        return { ...state, users: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  