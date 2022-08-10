import { useEffect, useState } from "react";
import { User } from "../../types/users.types";
import { getUser } from "../../services/user.services";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState<User>();
  // const [id, setId] = useState<string | undefined>()

  let { userId } = useParams();
  // console.log(useParams())
  useEffect(() => {
    getUser(userId as string).then((res) => setUser(res.data));
  }, [userId]);
  console.log(user);
  return (
    <div>
      <img src={user?.avatar} alt={user?.first_name} />
      <div>
        {user?.first_name} {user?.last_name}
        <br />
        {user?.email}
      </div>
    </div>
  );
};

export default UserDetails;
