import { IUser } from "./UserInterface";

export interface IUserContext {
  user: IUserState | undefined;
  setUser: (value: IUserState) => void | undefined;
}

export interface IUserState {
  info: IUser;
  token: IToken;
}

interface IToken {
  access: string;
  refresh: string;
}
