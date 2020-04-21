import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(v) {
  const [value, setValue] = useLocalStorage("dark", v);

  useEffect(() => {
    if (value === true) {
      document.body.classList.add("dark-mode");
      document.body.classList.add('cardRoot');
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.remove('cardRoot');
    } 
  }, [value]);

  return [value, setValue];
}