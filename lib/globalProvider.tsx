import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAppwrite } from "./useAppwrite";
import { getCurrentUser } from "./appwrite";

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

interface GlobalContextType {
  isLoggedIn: boolean;
  user: User | null;
  setUser: (user: User) => void;
  loading: boolean;
  setLoading: () => void;
  error: string;
  setError: (error: string) => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const toggleLoading = () => {
    setLoading((prev) => !prev);
  };

  const toggleError = (error: string) => {
    setError(error);
  };

  const updateUser = (user: User) => {
    setUser(user);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getCurrentUser();
      if (response) {
        const { email, $id, name, avatar } = response;
        const fetchedUser = {
          email,
          $id,
          name,
          avatar,
        };
        setUser(fetchedUser);
        setLoading(false);
        setIsLoggedIn(true);
      }
    };
    fetchUser();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        user,
        loading,
        error,
        setUser: updateUser,
        setLoading: toggleLoading,
        setError: toggleError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
};
