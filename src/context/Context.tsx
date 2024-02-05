import { createContext }    from 'react';
import { State, UserData }  from './Provider';

export type ContextType = {
  state: State;
  login: (token : string) => void;
  logout: () => void;
  setUserData: (data : UserData) => void
};

export const Context = createContext<ContextType | null>(null);