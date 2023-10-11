import RatingForm from "./RatingForm";

interface FriendCardProps {
    username: string;
    hobbies: string;
    interests: string;
    images: string[]
}

function FriendCard({username, hobbies, interests, images}: FriendCardProps){

    const profilePic = images[0];

    return (
        <div className="FriendCard">
            <img src={profilePic} />
            <h2>{username}</h2>
            <p>Hobbies are: {hobbies}</p>
            <p>Interests include: {interests}</p>
            <RatingForm />
        </div>
    )
}





export default FriendCard;