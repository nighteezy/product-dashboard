const TOKEN_KEY = "token";

export const authStorage = {
  setToken(token: string, remember: boolean) {
    const storage = remember ? localStorage : sessionStorage;
    const otherStorage = remember ? sessionStorage : localStorage;

    storage.setItem(TOKEN_KEY, token);
    otherStorage.removeItem(TOKEN_KEY);
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
  },

  isAuthenticated(): boolean {
    return !!authStorage.getToken();
  },
};
