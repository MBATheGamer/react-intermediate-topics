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

export default authReducer;
