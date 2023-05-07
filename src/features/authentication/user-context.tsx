import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, PropsWithChildren, useState } from "react";
import { firebaseAuth } from "../firebase/firebase";

export const UserContext = createContext<User | null>(null);

type UserProviderProps = {

};

export const UserProvider = (props: PropsWithChildren<UserProviderProps>) => {

  const [ user, setUser ] = useState<User | null>(null);

  onAuthStateChanged(firebaseAuth, (user) => {
    setUser(user);
  });

  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  )
}
