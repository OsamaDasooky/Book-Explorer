
export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await fetch(url, options);
  
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Fetch error: ${res.status} ${res.statusText} - ${errorText}`);
    }
    
    return res.json() as Promise<T>;
  }
  
  