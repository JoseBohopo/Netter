import { AuthContext } from "eplant/context/authContext";
import { useContext } from "react";

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

function useUser() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuthContext must be within TodoProvider");
  }
  return useContext(AuthContext);
}

export default useUser;
