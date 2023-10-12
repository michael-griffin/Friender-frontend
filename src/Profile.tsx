import { Link } from "react-router-dom"
import FriendCard from "./FriendCard";


function Profile({user}) {

    function handleFileSubmit(evt){
        evt.preventDefault();
        //JS way is to grab whole form, then convert that into form data:
        const form = document.querySelector<HTMLFormElement>('form.ProfileForm');
        const formData = new FormData(form);

        fetch('url', {
            method: "POST",
            body: formData,

        })
    }

    // {username, hobbies, interests, images}:
    return (
        <div className="Profile">
            <FriendCard user={user} />
            <Link to="/profile/edit" ><button >Edit Profile</button></Link>
            <form encType="multipart/form-data">
                <button>Add Image</button>
            </form>
        </div>
    )
}


export default Profile;

