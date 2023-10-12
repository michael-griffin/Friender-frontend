import { Link } from "react-router-dom"
import FriendCard from "./FriendCard";


function Profile({user}) {

    // {username, hobbies, interests, images}:
    return (
        <div className="Profile">
            <FriendCard user={user} />
            <Link to="/profile/edit" ><button >Edit Profile</button></Link>
            <Link to='/profile/add-image'><button>Add Image</button></Link>
        </div>
    )
}


export default Profile;

