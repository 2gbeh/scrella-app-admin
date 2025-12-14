import { UserDto } from "@/types/user.type";
import { Dispatch, SetStateAction, useEffect } from "react";

const baseUrl = process.env.EXPO_PUBLIC_API_URL

interface UseCustomersScreenParams {
  debouncedText: string;
  setData: Dispatch<SetStateAction<UserDto[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export function useCustomersScreen({ debouncedText, setData, setLoading }: UseCustomersScreenParams) {

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    fetch(!debouncedText ? `${baseUrl}/users` : `${baseUrl}/users?q=${debouncedText}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) setData(data as UserDto[]);
      })
      .finally(() => !isCancelled && setLoading(false));

    return () => {
      isCancelled = true;
    };
  }, [debouncedText, setData, setLoading]);
}