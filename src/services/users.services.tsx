import { User } from "../types/users.types"

export const fetchUsers =():Promise<User[]>=>{ 
    return fetch("https://api.github.com/users").then(res=>res.json()).then(data=>data as User[])
}