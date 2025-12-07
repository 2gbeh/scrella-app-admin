import { useState, useEffect } from "react";

const baseUrl = process.env.EXPO_PUBLIC_API_URL

interface UseDebouncedSearchParams {
  initialSearchText?: string;
  delay?: number;
}

export function useDebouncedSearch(params?: UseDebouncedSearchParams) {
  const { initialSearchText = '', delay = 400 } = params || {};
  const [data, _setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState(initialSearchText);
  const [_debouncedText, _setDebouncedText] = useState(initialSearchText);

  useEffect(() => {
    const timeout = setTimeout(() => {
      _setDebouncedText(searchText.trim());
    }, delay);

    return () => clearTimeout(timeout);
  }, [searchText, delay]);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    fetch(!_debouncedText ? `${baseUrl}/users` : `${baseUrl}/users?q=${_debouncedText}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) _setData(data);
      })
      .finally(() => !isCancelled && setLoading(false));

    return () => {
      isCancelled = true;
    };
  }, [_debouncedText]);

  return {
    searchText,
    setSearchText,
    data,
    loading
  };
}