import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(v) {
  const [value, setValue] = useLocalStorage("darkmode", v);

  useEffect(() => {
    if (value === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    } 
  }, [value]);

  return [value, setValue];
}