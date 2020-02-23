import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [value, setValue] = useState("dark");

  useEffect(() => {
    const appBody = document.querySelector("body");
    if (value === true) {
      appBody.classList.add("dark-mode");
    } else if (value === false) {
      appBody.classList.remove("dark-mode");
    }
  }, [value]);

  return [value, setValue];
};
