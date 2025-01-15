import { createContext } from "react";

export const AuthContext = createContext();

const initialState = {
  email: "",
  token: "",
};

export const AuthContextProvider = ({ children }) => {
  const [user, SetUser] = useState(initialState);

  const handleLogin = (email, token) => {
    setUser({ email, token });
    localStorage.setItem("liebre-token", token);
  };

  const handleLogout = () => {
    setUser(initialState);
    localStorage.removeItem("liebre-token", token);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
