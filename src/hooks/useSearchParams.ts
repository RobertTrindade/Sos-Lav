export function createQueryString<T>(params: Partial<T>): string {
  const urlSearchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      urlSearchParams.set(key, String(value));
    }
  });

  return urlSearchParams.toString();
}
