import { useState } from "react";
import { UserInterface, UpdateInterface } from "./interfaces";

interface ProfileFormProps {
  user: UserInterface;
  handleSubmit: (formData: UpdateInterface) => void;
}

function ProfileForm({ user, handleSubmit }: ProfileFormProps) {

  const initialFormData = {

    hobbies: user.hobbies,
    interests: user.interests,
    location: user.location,
    radius: user.radius
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(prevForm => ({ ...prevForm, [name]: value }));
  }

  function submitForm(evt) {
    evt.preventDefault();
    console.log('formdata on submit is: ', formData);
    handleSubmit(formData);
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <h1>Edit {user.username}'s Profile</h1>
        <label htmlFor="hobbies">Hobbies</label>
        <textarea  onChange={handleChange}
          name="hobbies"
          value={formData.hobbies}
        />
        <label htmlFor="interests">Interests</label>
        <textarea onChange={handleChange}
          name="interests"
          value={formData.interests}
        />
        <label htmlFor="location">Location</label>
        <input type="number" onChange={handleChange}
          name="location"
          value={formData.location}
        />
        <label htmlFor="radius">Radius</label>
        <input type="number" onChange={handleChange}
          name="radius"
          value={formData.radius}
        />
        <button type="submit">Edit Profile</button>
      </form>
    </>
  );
}


export default ProfileForm;