import { useEffect, useRef } from "react";

const colors = [
  "#ffffff", "#e5e5e5", "#cbcbcb", "#b2b2b2", "#9a9a9a", "#828282", "#6c6c6c", "#565656", "#404040", "#2c2c2c", "#1a1a1a", "#000000"
];

export default function CursorTrail() {
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const coords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const circles = circlesRef.current;

    circles.forEach((circle, index) => {
      (circle as any).x = 0;
      (circle as any).y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        (circle as any).x = x;
        (circle as any).y = y;

        const next = circles[index + 1] || circles[0];
        x += ((next as any).x - x) * 0.3;
        y += ((next as any).y - y) * 0.3;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) circlesRef.current[i] = el;
          }}
          className="opacity-0 lg:opacity-100 fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999]"
        />
      ))}
    </>
  );
}