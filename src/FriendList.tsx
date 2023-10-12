import { UserInterface } from "./interfaces";
import {useState, useEffect} from "react";
import FriendCard from "./FriendCard";
import FrienderAPI from "./api";

function FriendList({ user }: {user: UserInterface}) {

  const [users, setUsers] = useState(null);

  // useEffect(function getUsers() {
  //   async function fetchUsers() {
  //     const eligibleUsers = await FrienderAPI.getNearMe(user.username);
  //     setUsers(eligibleUsers);
  //   }
  //   fetchUsers();
  // }, [user])


  return (
    <div className="FriendList">
      {users.map(({username, hobbies, interests, images} ) => (
        <FriendCard username={username} hobbies={hobbies} interests={interests} images={images}/>
      ))}
    </div>
  );
}


export default FriendList;