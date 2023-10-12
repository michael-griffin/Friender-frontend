import './FriendCard.css';

function FriendCard( {user} ){
    const {username, hobbies, interests, image_urls} = user;

    const profilePic = image_urls[0] || './default-profile-pic.jpg'

    return (
        <div className="FriendCard">
            <img src={profilePic} width='200px'/>
            <h2>{username}</h2>
            <p>Hobbies are: {hobbies}</p>
            <p>Interests include: {interests}</p>
        </div>
    )
}





export default FriendCard;