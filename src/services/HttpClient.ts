import LocalStorageService from "@/src/services/auth/localStorage.service";

class HttpClient {
  private baseUrl: string;
  public localStorageService!: typeof LocalStorageService;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;
    this.localStorageService = LocalStorageService;
  }

  async getWithAuth<T>(path: string, revalidate = 0): Promise<T> {
    const token = this.localStorageService.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      
    };

    const response = await fetch(`${this.baseUrl}${path}`, {
      headers,
      next: { revalidate },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${path}`);
    }

    return response.json();
  }

  async patch<T>(path: string, body: unknown): Promise<T> {
    const token = this.localStorageService.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Failed to patch data to ${path}`);
    }

    return response.json();
  }

  async put<T>(path: string, body: unknown): Promise<T> {
    const token = this.localStorageService.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Failed to patch data to ${path}`);
    }

    return response.json();
  }

  async upload<T>(path: string, body: FormData, unique: boolean): Promise<T> {
    const token = this.localStorageService.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error(`Failed to post data to ${path}`);
    }

    return response.json();
  }

  async get<T>(path: string, revalidate = 0): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      next: { revalidate },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${path}`);
    }

    return response.json();
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    const token = this.localStorageService.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    return await response.json();
  }
}

export default HttpClient;
