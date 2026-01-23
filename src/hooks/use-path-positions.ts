import { useState, useEffect, RefObject } from "react";

interface PathPosition {
  x: number;
  y: number;
  t: number;
}

/**
 * Hook to compute exact positions along an SVG path using getPointAtLength()
 * Returns positions as percentages relative to the viewBox dimensions
 */
export function usePathPositions(
  pathRef: RefObject<SVGPathElement>,
  tValues: number[],
  viewBoxWidth: number = 400,
  viewBoxHeight: number = 800
): PathPosition[] {
  const [positions, setPositions] = useState<PathPosition[]>([]);

  useEffect(() => {
    const computePositions = () => {
      if (!pathRef.current) return;

      const path = pathRef.current;
      const totalLength = path.getTotalLength();

      const pts = tValues.map((t) => {
        const point = path.getPointAtLength(t * totalLength);
        return {
          x: (point.x / viewBoxWidth) * 100,
          y: (point.y / viewBoxHeight) * 100,
          t,
        };
      });

      setPositions(pts);
    };

    // Initial computation
    computePositions();

    // Recompute on resize for responsive behavior
    window.addEventListener("resize", computePositions);
    return () => window.removeEventListener("resize", computePositions);
  }, [pathRef, tValues, viewBoxWidth, viewBoxHeight]);

  return positions;
}
