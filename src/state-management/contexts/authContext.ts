import React, { Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";

type AuthContextType = {
  user: string;
  dispatch: Dispatch<AuthAction>;
};

const AuthContext = React.createContext({} as AuthContextType);

export default AuthContext;
