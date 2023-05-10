import { ProfileModel } from "./profile.model";

export interface UserModel {
    name: string,
    email: string,
    profile: ProfileModel,
    password: string,
}
