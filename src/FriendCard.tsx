

// interface FriendCardProps {
//     username: string;
//     hobbies: string;
//     interests: string;
//     images: string[]
// }

function FriendCard( {user} ){
    const {username, hobbies, interests, image_urls} = user;

    const profilePic = image_urls[0];

    return (
        <div className="FriendCard">
            <img src={profilePic} />
            <h2>{username}</h2>
            <p>Hobbies are: {hobbies}</p>
            <p>Interests include: {interests}</p>
        </div>
    )
}





export default FriendCard;