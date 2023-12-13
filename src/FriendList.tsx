import "./FriendList.css";
import { UserInterface } from "./interfaces";
import { useState, useEffect } from "react";
import FriendCard from "./FriendCard";
import RatingForm from "./RatingForm";
import IsLoading from "./IsLoading";
import FrienderAPI from "./api";

interface FriendListProps {
  user: UserInterface;
}

function FriendList({ user }: FriendListProps) {

  const [users, setUsers] = useState(null);

  const currUser = users ? users[0] : undefined;

  useEffect(function getUsers() {
    async function fetchUsers() {
      const eligibleUsers = await FrienderAPI.getNearMe(user.username);
      setUsers(eligibleUsers);
    }
    fetchUsers();
  }, [user])


  async function rateUser(rater, rated, isLiked){
    await FrienderAPI.rateUser(rater, rated, isLiked);
    setUsers(prevUsers => {
      const newUsers = prevUsers.filter(user => user.username !== rated);
      return newUsers;
    })
  }

  if (users !== null && users.length === 0){
    return (
      <div className="FriendList">
        <p>You have run out of people to rate =(</p>
      </div>
    )
  }

  return (
    <div className="FriendList">
      {users ?
        <div className="FriendList-container" key={`${currUser.username}-container`} >
          <FriendCard key={`${currUser.username}-FriendCard`} user={currUser} />
          <RatingForm
            key={`${currUser.username}-RatingForm`}
            rater={user.username}
            rated={currUser.username}
            handleRating={rateUser} />
        </div>
      :
      <IsLoading />
      }
      {}
    </div>
  );
}


export default FriendList;