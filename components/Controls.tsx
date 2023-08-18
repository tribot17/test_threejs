import { useFrame } from "@react-three/fiber";
import React, { useRef, useState, useEffect } from "react";
import { PointerLockControls } from "@react-three/drei";
import * as THREE from "three";

const ControlsFrame: React.FC<{
  moveForward: boolean;
  moveBackward: boolean;
  moveLeft: boolean;
  moveRight: boolean;
  controlsRef: any;
}> = ({ moveForward, moveBackward, moveLeft, moveRight, controlsRef }) => {
  useFrame(({ camera }) => {
    const velocity = 0.2;
    if (
      camera.position.z + velocity > -25 &&
      camera.position.z + velocity < 25 &&
      camera.position.x + velocity > -25 &&
      camera.position.x + velocity < 25
    ) {
      if (moveForward) {
        controlsRef.current?.moveForward(velocity);
      } else if (moveLeft) {
        controlsRef.current.moveRight(-velocity);
      } else if (moveBackward) {
        controlsRef.current.moveForward(-velocity);
      } else if (moveRight) {
        controlsRef.current.moveRight(velocity);
      }
    } else {
      camera.position.x = 0;
      camera.position.z = 0;
      camera.position.y = 0;
    }
  });

  return null;
};

const Controls = () => {
  const controlsRef = useRef<any>();
  const isLocked = useRef(false);
  const [moveForward, setMoveForward] = useState(false);
  const [moveBackward, setMoveBackward] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);

  const onKeyDown = function (event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowUp":
      case "z":
        setMoveForward(true);
        break;

      case "ArrowLeft":
      case "q":
        setMoveLeft(true);
        break;

      case "ArrowDown":
      case "s":
        setMoveBackward(true);
        break;

      case "ArrowRight":
      case "d":
        setMoveRight(true);
        break;
      default:
        return;
    }
  };

  const onKeyUp = function (event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowUp":
      case "z":
        setMoveForward(false);
        break;

      case "ArrowLeft":
      case "q":
        setMoveLeft(false);
        break;

      case "ArrowDown":
      case "s":
        setMoveBackward(false);
        break;

      case "ArrowRight":
      case "d":
        setMoveRight(false);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.addEventListener("keyup", onKeyUp);
    };
  }, []);

  return (
    <>
      <PointerLockControls
        onUpdate={() => {
          if (controlsRef.current) {
            controlsRef.current.addEventListener("lock", () => {
              console.log("lock");
              isLocked.current = true;
            });
            controlsRef.current.addEventListener("unlock", () => {
              console.log("unlock");
              isLocked.current = false;
            });
          }
        }}
        ref={controlsRef}
      />
      <ControlsFrame
        moveForward={moveForward}
        moveBackward={moveBackward}
        moveLeft={moveLeft}
        moveRight={moveRight}
        controlsRef={controlsRef}
      />
    </>
  );
};

export default Controls;
