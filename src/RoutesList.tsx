import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./HomePage";
import FriendList from "./FriendList";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";


interface RoutesListInterface {
  user: {};
  signup: ({ }) => void;
  login: ({ }) => void;
  update: ({ }) => void;
}

function RoutesList({ user, signup, login, update }: RoutesListInterface) {

  return (
    <Routes>
      {user ?
        <>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" />
          <Route path="/people" element={<FriendList user={user} />} />
        </>
        :
        <>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignupForm signup={signup} />} />
          <Route path="/login" element={<LoginForm login={login} />} />
        </>
      }
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}