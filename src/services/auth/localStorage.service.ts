class LocalStorageService {
  saveToken = (token: string) =>
    localStorage.setItem("token", JSON.stringify(token));

  removeToken = () => localStorage.removeItem("token");

  getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    return JSON.parse(token);
  };
}

export default new LocalStorageService();
