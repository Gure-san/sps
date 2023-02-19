import { UseLocalStoragePropType } from "../types/hooks/useLocalStorageType";

export function useLocalStorage({
  method,
  key,
  value = null
}: UseLocalStoragePropType) {
  switch(method) {
    case 'set': 
      localStorage.setItem(key, JSON.stringify(value));
      return;

    case 'get':
      const get_result = localStorage.getItem(key);
      return get_result ? JSON.parse(get_result) : null;

    case 'check':
      const check_result = localStorage.getItem(key);
      if(!check_result) return false;
      return true;


    case 'remove':
      localStorage.removeItem(key);
      return;
  }
}