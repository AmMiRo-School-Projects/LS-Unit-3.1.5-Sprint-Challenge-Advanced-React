import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import styled from "styled-components";

const ButtonDiv = styled.div`
  margin: 2%;
`;

const Toggle = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <ButtonDiv className="dark-mode__toggle">
      <button
        data-testid="button"
        onClick={toggleMode}
        className={darkMode ? "toggle toggled" : "toggle"}
      >
        Dark Mode!
      </button>
    </ButtonDiv>
  );
};

export default Toggle;
