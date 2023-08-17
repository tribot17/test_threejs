import { CharacterContext } from "@/context/CharacterContext";
import Crosshair from "../Crosshair";
import DisplayKeyMessage from "../DisplayKeyMessage";
import stlyes from "./UiContainer.module.scss";
import { useContext, useEffect, useState } from "react";

const UIContainer = () => {
  const [active, setActive] = useState(false);
  const { isActive } = useContext(CharacterContext);

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  return (
    <div className={stlyes.UIContainer}>
      <Crosshair />
      {!active ? <DisplayKeyMessage /> : null}
    </div>
  );
};

export default UIContainer;
