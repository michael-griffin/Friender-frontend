import "./FriendList.css";
import { UserInterface } from "./interfaces";
import { useState, useEffect } from "react";
import FriendCard from "./FriendCard";
import RatingForm from "./RatingForm";
import IsLoading from './IsLoading';
import FrienderAPI from "./api";

interface FriendListProps {
  user: UserInterface;
}

function FriendList({ user }: FriendListProps) {

  const [users, setUsers] = useState(null);
  const [ratedCount, setRatedCount] = useState(0);

  useEffect(function getUsers() {
    async function fetchUsers() {
      const eligibleUsers = await FrienderAPI.getNearMe(user.username);
      setUsers(eligibleUsers);
    }
    fetchUsers();
  }, [ratedCount])


  async function rateUser(rater, rated, isLiked){
    await FrienderAPI.rateUser(rater, rated, isLiked);
    setRatedCount(prevCount => prevCount + 1);
  }

  return (
    <div className="FriendList">
      {users ?
      users.map((currUser) => (
        <div className="FriendList-container"  key={`${currUser.username}-container`} >
          <FriendCard key={`${currUser.username}-FriendCard`} user={currUser} />
          <RatingForm
            key={`${currUser.username}-RatingForm`}
            rater={user.username}
            rated={currUser.username}
            handleRating={rateUser} />
        </div>

      ))
      :
      <IsLoading />
      }
      {}
    </div>
  );
}


export default FriendList;