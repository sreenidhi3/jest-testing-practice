import { useEffect, useMemo, useState } from "react";
import { User } from "../../types/users.types";
import { getUsers } from "../../services/user.services";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setUsersList } from "../../actions/users.actions";

const UserList = () => {
  // const [users, setUsers] = useState<User[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [isAscending, setAscending] = useState<boolean>(true);
  const reduxDispatch = useDispatch()

  const state = useSelector((state: RootState) => state.userReducer);
  let users = state.users

  // console.log("users",  users)

  const filteredUsers = useMemo(
    () =>
      users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
          user.last_name.toLowerCase().includes(searchText.toLowerCase())
      ),
    [users, searchText]
  );

  const sortedUsers = useMemo(
    () =>
      isAscending
        ? filteredUsers.sort((a, b) => (a.first_name > b.first_name ? 1 : -1))
        : filteredUsers.sort((a, b) => (a.first_name < b.first_name ? 1 : -1)),
    [filteredUsers, isAscending]
  );

  useEffect(() => {
    getUsers().then((data) => reduxDispatch(setUsersList(data.data)));
    // console.log(users)
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={() => setAscending(!isAscending)}>
        {isAscending ? "Sort Descending" : "Sort Ascending"}
      </button>
      <table>
        <tbody>
          <tr>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={user.id.toString()}>
                  <img src={user.avatar} alt={user.first_name} />
                </Link>
              </td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
