import { User } from "firebase/auth";

export interface ITime {
  value: number;
  units: any;
}

export interface IUser {
  currentUser: User;
  isLoading: boolean;
}

export interface ISelectUnit {
  day: number;
  hour: number;
  minute: number;
  seconds: number;
}
