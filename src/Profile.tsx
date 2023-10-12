


function Profile() {

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

    return (
        <div className="Profile">
            <form encType="multipart/form-data">
                <button>Add Image</button>
            </form>
        </div>
    )
}


export default Profile;

