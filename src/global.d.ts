/* eslint-disable @typescript-eslint/no-explicit-any */
// Extend the window object with the 'api' property
interface Window {
  api: {
    fetchData: (
      url: string,
      options?: any
    ) => Promise<{ data?: any; error?: string }>;
  };
}
