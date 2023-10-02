class LocalStorageService {
  saveToken = (token: string) =>
    localStorage.setItem("token", JSON.stringify(token));

  removeToken = () => localStorage.removeItem("token");

  getToken = () => localStorage.getItem("token");
}

export default new LocalStorageService();
