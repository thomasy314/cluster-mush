import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, PropsWithChildren, useState } from "react";
import { firebaseAuth } from "../firebase/firebase";

type UserContextType = {
  user: User | null,
  loadingUser: boolean
}

export const UserContext = createContext<UserContextType>({
  user: null,
  loadingUser: true
});

type UserProviderProps = {

};

export const UserProvider = (props: PropsWithChildren<UserProviderProps>) => {

  const [ user, setUser ] = useState<User | null>(null);
  const [ loadingUser, setLoadingUser ] = useState<boolean>(true);

  onAuthStateChanged(firebaseAuth, (user) => {
    setUser(user);
    setLoadingUser(false);
  });

  const contextValue: UserContextType = {
    user: user,
    loadingUser: loadingUser
  }

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  )
}
