import { ReducerActionType } from "../reducers/users.reducer";
import { User } from "../types/users.types";

export const setUsersList = (payload: User[]):ReducerActionType => {
  console.log("from actions", payload)
  return ({
  type: "SET_USERS",
  payload: payload
});
}

// export const fetchUsersAction = ()=>{
//   console.log("at actions")
//   return({
//     type: "FETCH_USERS", 
//     payload: []
//   })
// }