import { AuthContext } from "eplant/context/authContext";
import { useRouter } from "next/router";
import { useContext } from "react";
import { IUser } from "./types";

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

function useUser(): IUser | unknown {
  const router = useRouter();
  let context;
  try {
    context = useContext(AuthContext);
  } catch (error) {
    router.push("/");
    throw new Error("useAuthContext doesn't have a user");
  }

  return context;
}

export default useUser;
