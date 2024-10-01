import { useEffect, useState } from 'react';

export default function useLocalStorage(key) {
  const [items, setItems] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }

    localStorage.setItem(key, JSON.stringify(key === 'weather' ? {} : []));
    return key === 'weather' ? {} : [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items));
  }, [items, key]);

  return {
    items,
    setItems,
  };
}
