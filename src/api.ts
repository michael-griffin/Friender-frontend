import { Sign } from "crypto";
import { UserInterface, SignupInterface, LoginInterface, UpdateInterface } from "./interfaces";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000"


class FrienderAPI {

  static token = "";

  static async getUserInfo(username: string): Promise<UserInterface>{

  }

  static async getMatches(){

  }

  static async getNearMe(username: string): Promise<UserInterface[]>{

  }

  static async signupUser(formData: SignupInterface): Promise<string> {

  }

  static async loginUser(formData: LoginInterface): Promise<string> {

  }

  static async updateUser(formData: UpdateInterface): Promise<UserInterface> {

  }
}

export default FrienderAPI;