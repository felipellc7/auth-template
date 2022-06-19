import { LOGGING_IN, LOGGING_OUT } from "../types/publicTypes";

export const logInAction = (user: any) => {
  localStorage.setItem('user', JSON.stringify( user ) );
  return {
    type: LOGGING_IN,
    payload: user
  };
}

export const logOutAction = () => {
  localStorage.removeItem('user');
  return {type: LOGGING_OUT}
}