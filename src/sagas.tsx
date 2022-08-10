import { setUsersList } from "./actions/users.action"
import { fetchUsers } from "./services/users.services"
import {takeLatest, put, call} from 'redux-saga/effects'
import {User} from './types/users.types'
 
function* fetchUserSaga():any{
        console.log("at saga")
        const data = yield fetch("https://api.github.com/users").then(res=>res.json()).then(data=>data as User[])
        yield put(setUsersList(data))
}

export function* userSaga(){
    yield takeLatest('FETCH_USER', fetchUserSaga)
}