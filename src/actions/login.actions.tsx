export const setToken = (payload: string) => {
  // console.log("from setToken", payload);
  return {
    type: "SET_TOKEN",
    payload: payload
  };
};

export const clearToken = () => ({
  type: "CLEAR_TOKEN",
  payload: ""
});
