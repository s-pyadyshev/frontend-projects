import { useState, useEffect } from "react";
import { debounce } from "./../utils/utils";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleResizeDebounced = debounce(handleResize, 250);

    window.addEventListener("resize", handleResizeDebounced);

    handleResizeDebounced();

    return () => window.removeEventListener("resize", handleResizeDebounced);
  }, []);

  return windowSize;
}

export default useWindowSize;
