//** Interface for User Object */
interface UserInterface {
  username: string;
  hobbies: string;
  interests: string;
  location: number;
  radius: number;
  images: string[]
}

interface SignupInterface {
  username: string;
  password: string;
  hobbies: string;
  interests: string;
  location: number | null;
  radius: number | null;
}

interface LoginInterface {
  username: string;
  password: string
}

interface UpdateInterface {
  hobbies: string;
  interests: string;
  location: number;
  radius: number;
}

export type {
  UserInterface,
  SignupInterface,
  LoginInterface,
  UpdateInterface
}