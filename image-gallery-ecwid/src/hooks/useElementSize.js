import { useState, useEffect, useRef } from "react";
import { debounce } from "./../utils/utils";

function useElementSize() {
  const ref = useRef(null);
  const [elementSize, setElementSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateSize = () => {
      setElementSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    };

    const updateSizeDebounced = debounce(updateSize, 250);

    window.addEventListener("resize", updateSizeDebounced);

    updateSizeDebounced();

    return () => window.removeEventListener("resize", updateSizeDebounced);
  }, []);

  return [elementSize, ref];
}

export default useElementSize;
