import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [value, setValue] = useLocalStorage("darkmode");

  useEffect(() => {
    if (value) {
      window.document.body.classList.add("dark-mode");
    } else {
      window.document.body.classList.remove("dark-mode");
    } 
  }, [value]);

  return [value,setValue];
}