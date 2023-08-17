import { useFrame } from "@react-three/fiber";
import React, { useRef, useState, useEffect } from "react";
import { Html, PointerLockControls } from "@react-three/drei";
import * as THREE from "three";
import { PerspectiveCamera } from "@react-three/drei";

const Controls = () => {
  const controlsRef = useRef<any>();
  const isLocked = useRef(false);
  const [moveForward, setMoveForward] = useState(false);
  const [moveBackward, setMoveBackward] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);
  const [cameraPosition, setCameraPosition] = useState(new THREE.Vector3());
  useFrame(({ camera }) => {
    const velocity = 0.2;
    if (moveForward) {
      controlsRef.current?.moveForward(velocity);
    } else if (moveLeft) {
      controlsRef.current.moveRight(-velocity);
    } else if (moveBackward) {
      controlsRef.current.moveForward(-velocity);
    } else if (moveRight) {
      controlsRef.current.moveRight(velocity);
    }

    setCameraPosition(camera.position);
  });

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
    <group>
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
      {/* <Html position={cameraPosition} style={{ pointerEvents: "none" }}>
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "red",
            position: "fixed",
            top: `calc(50% - ${cameraPosition.y}px)`,
            left: `calc(50% + ${cameraPosition.x}px)`,
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
          }}
        ></div>
      </Html> */}
    </group>
  );
};

export default Controls;
