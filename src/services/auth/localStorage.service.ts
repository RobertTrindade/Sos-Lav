class LocalStorageService {
  saveToken = (token: string) =>
    localStorage.setItem("token", JSON.stringify(token));

  saveObject = (obj: any, key: string) =>
    localStorage.setItem(key, JSON.stringify(obj));

  getObject = (key: string) => JSON.parse(localStorage.getItem(key)!);

  removeToken = () => localStorage.removeItem("token");

  getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    return JSON.parse(token);
  };
}

export default new LocalStorageService();
