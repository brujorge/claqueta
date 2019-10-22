import { useState } from "react";

export const useToggleableBoolean = initialBooleanState => {
  const [boolean, setBoolean] = useState(initialBooleanState);
  const toggleBoolean = () => {
    setBoolean(!boolean);
  };
  return [boolean, toggleBoolean, setBoolean];
};
