import React, { useRef } from "react";
import { useOnClickOutside } from "./useOnOutsideClick";

/**
 *
 * @param {{open:boolean, onClose:()=>void}} props
 * @returns {JSX.Element}
 */
const OutsideClickComponent = ({ open, onClose }) => {
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    console.log("Outside click");
    onClose && onClose();
  });

  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: "0",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "600px",
          maxHeight: "450px",
          width: "96%",
          height: "96%",
          backgroundColor: "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>Click here and nothing happens. Click outside and it works!</h1>
      </div>
    </div>
  );
};

export default OutsideClickComponent;
