import { ProfileModel } from "./profile.model";

export interface UserModel {
    name: string | null,
    email: string | null,
    profile: ProfileModel | null,
    password: string | null,
}
