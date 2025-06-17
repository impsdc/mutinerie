export const SetInLocalstorage = <T>(key: string, value: T): void => {
  const serializedValue = JSON.stringify(value);
  localStorage.setItem(key, serializedValue);
};

export const GetLocalStorage = <T>(key: string): T | null => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue) as T;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const removeLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const ClearLocalStorage = (): void => {
  localStorage.clear();
};
