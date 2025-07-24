declare global {
  function gtag(command: 'config' | 'event' | 'js', targetId: string | Date, config?: any): void;
  interface Window {
    dataLayer: any[];
    gtag: typeof gtag;
  }
}

export {};