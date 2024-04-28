import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

type LoginAction = {
  type: "LOGIN";
  username: string;
};

type LogoutAction = {
  type: "LOGOUT";
};

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (_status: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.username;
    case "LOGOUT":
      return "";
  }
};

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
