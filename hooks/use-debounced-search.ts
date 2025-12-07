import { useState, useEffect } from "react";

interface UseDebouncedSearchParams {
  initialSearchText?: string;
  delay?: number;
}

export function useDebouncedSearch<T>(params?: UseDebouncedSearchParams) {
  const { initialSearchText = '', delay = 400 } = params || {};
  const [searchText, setSearchText] = useState(initialSearchText);
  const [debouncedText, _setDebouncedText] = useState(initialSearchText);
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      _setDebouncedText(searchText.trim());
    }, delay);

    return () => clearTimeout(timeout);
  }, [searchText, delay]);

  return {
    searchText,
    setSearchText,
    debouncedText,
    data,
    setData,
    loading,
    setLoading,
  };
}