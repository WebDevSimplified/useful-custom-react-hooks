import { useEffect } from "react";

/**
 *
 * @param {React.RefObject<T>} ref
 * @param {(event: MouseEvent | TouchEvent) => void} onOutsideClick
 */
export const useOnClickOutside = (ref, onOutsideClick) => {
  useEffect(() => {
    /**
     * @type {<U extends MouseEvent | TouchEvent>(event: U) => void}
     * @param {U} event
     * @returns {void}
     */
    const touchListener = (event) => {
      if (!ref.current || ref.current.contains(event?.target)) {
        // if clicked element is inside the ref element, do nothing
        return;
      }
      onOutsideClick(event);
    };

    document.addEventListener("mousedown", touchListener); // for desktop
    document.addEventListener("touchstart", touchListener); // for mobile

    return () => {
      // cleanup
      document.removeEventListener("mousedown", touchListener);
      document.removeEventListener("touchstart", touchListener);
    };
  }, [ref, onOutsideClick]);
};
