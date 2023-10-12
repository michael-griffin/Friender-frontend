
import React, { useState } from "react";

import { LoginInterface } from "./interfaces";

interface LoginFormProps {
  handleSubmit: (formData: LoginInterface) => void;
}

function LoginForm({ handleSubmit }: LoginFormProps) {

  const initialFormData: LoginInterface = {
    username: "",
    password: ""
  };
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;
    setFormData(prevForm => (
      { ...prevForm, [name]: value }
    ));
  }

  function submitForm(evt: React.FormEvent) {
    evt.preventDefault();
    handleSubmit(formData);
  }


  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="username">Username</label>
        <input type="text" onChange={handleChange}
          name="username"
          value={formData.username}
        />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={handleChange}
          name="password"
          value={formData.password}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginForm;