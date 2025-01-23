import { useEffect, useState } from "react";

export function useWindowSize(){
  const [widthHeight, setWidthHeight] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthHeight({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  return widthHeight
}
