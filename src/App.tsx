import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from './types/users.types'
import { RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from './services/users.services';
import { setUsersList } from './actions/users.action';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  QueryKey,
} from '@tanstack/react-query'

function App() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient()

  const state = useSelector((state: RootState) => state.userReducer);
  useEffect(()=>{
    fetchUsers().then(data=>{
      // console.log(data)
      dispatch(setUsersList(data))
    })
  }, [])

    // console.log("state,", data)
  return (
    <div className="App">
      <div>
      {/* <button onClick={()=>dispatch(fetchUsersAction())}>Fetch Users</button> */}
      
       {/* <p>{isLoading && "Loading..."}</p>
      <p>{error ? "Error" : ""}</p> */}
      {state.users.slice(0,5).map(user=><p key={user.id}>{user.login}</p>)}
      </div>
    </div>
  );
}

export default App;
