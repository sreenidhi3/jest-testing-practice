import { User } from "../types/users.types";
export const setUsersList = (payload: User[]) => {
  // console.log(payload)
  return ({
  type: "SET_USERS_LIST",
  payload: payload
});
}
