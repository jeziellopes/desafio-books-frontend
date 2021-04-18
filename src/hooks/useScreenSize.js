import { useLayoutEffect, useState } from "react";

export default function useScreenSize() {
  const [width, setWidth] = useState(window.innerHeight);
  const [height, setHeight] = useState(window.innerHeight);

  const updateScreenSize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return [width, height];
}
