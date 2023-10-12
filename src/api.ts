import { Sign } from "crypto";
import { UserInterface, SignupInterface, LoginInterface, UpdateInterface } from "./interfaces";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";


class FrienderAPI {

  static token = "";

  static async getUserInfo(username: string): Promise<UserInterface> {
    const response = await fetch(`${BASE_URL}/users/${username}`, {
      method: 'GET',
      headers: { 'token': this.token }
    });

    const data = await response.json();

    if (data.error) {

      throw new Error(data.error);
    }

    return data;
  }

  // static async getMatches(){

  // }

  // static async getNearMe(username: string): Promise<UserInterface[]>{

  // }

  static async signupUser(formData: SignupInterface): Promise<string> {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();

    if (data.token) return data.token;

    throw new Error(data.error);
  }

  static async loginUser(formData: LoginInterface): Promise<string> {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();

    if (data.token) return data.token;

    throw new Error(data.error);
  }

  static async updateUser(formData: UpdateInterface, username: string): Promise<UserInterface> {
    const response = await fetch(`${BASE_URL}/users/${username}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json', 'token': this.token }
    });

    const data = await response.json();

    if (data.error) {

      throw new Error(data.error);
    }

    return data;
  }
}

export default FrienderAPI;