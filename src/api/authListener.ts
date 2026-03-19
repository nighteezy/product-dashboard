let onUnauthorized: (() => void) | null = null;

export const setOnUnauthorized = (callback: () => void) => {
  onUnauthorized = callback;
};

export const clearOnUnauthorized = () => {
  onUnauthorized = null;
};

export const triggerUnauthorized = () => {
  onUnauthorized?.();
};
