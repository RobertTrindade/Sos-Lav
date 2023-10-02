import LocalStorageService from "@/src/services/auth/localStorage.service";

class HttpClient {
  private baseUrl: string;
  private localStorageService!: typeof LocalStorageService;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;
  }

  async get<T>(path: string, revalidate = 10): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      next: {
        revalidate: revalidate,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${path}`);
    }

    return response.json();
  }

  async getWithAuth<T>(path: string, revalidate = 10): Promise<T> {
    const token = this.localStorageService.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await fetch(`${this.baseUrl}${path}`, {
      headers,
      next: {
        revalidate: revalidate,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${path}`);
    }

    return response.json();
  }

  async post<T>(params: { path: string; token?: string }): Promise<T> {
    const token = params.token || this.localStorageService.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const body = JSON.stringify({});

    const response = await fetch(`${this.baseUrl}${params.path}`, {
      method: "POST",
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error(`Failed to post data to ${params.path}`);
    }

    return response.json();
  }
}

export default HttpClient;
