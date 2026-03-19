import { create } from "zustand";
import { authStorage } from "../lib/authStorage";
import type { IAuthState } from "./types";

export const useAuth = create<IAuthState>((set) => ({
  isAuth: authStorage.isAuthenticated(),
  login: (token, remember) => {
    authStorage.setToken(token, remember);
    set({ isAuth: true });
  },
  logout: () => {
    authStorage.removeToken();
    set({ isAuth: false });
  },
}));
