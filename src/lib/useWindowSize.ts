import { useState, useEffect } from "react";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

function useWindowSize(): string {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowSize.width && windowSize.width <= 600) {
    return "mobile";
  }

  if (windowSize.width && windowSize.width < 800 && windowSize.width > 600) {
    return "medium";
  }

  return "desktop";
}

export default useWindowSize;
