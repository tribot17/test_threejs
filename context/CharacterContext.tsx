import { createContext, useEffect, useState } from "react";

interface CharacterContextInterface {
  isActive: () => boolean;
  setActive: Function;
}

export const CharacterContext = createContext<CharacterContextInterface>({
  isActive: () => {
    return false;
  },
  setActive: () => {},
});

export const CharacterContextProvider: React.FC<{ children: any }> = ({
  children,
}) => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    return active;
  };

  return (
    <CharacterContext.Provider value={{ isActive, setActive }}>
      {children}
    </CharacterContext.Provider>
  );
};
