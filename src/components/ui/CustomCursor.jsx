// import { useEffect, useState } from "react";

// export default function CustomCursor() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e) => {
//       setPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <>
//       <div
//         className="cursor-ring"
//         style={{ left: pos.x, top: pos.y }}
//       />
//       <div
//         className="cursor-dot"
//         style={{ left: pos.x, top: pos.y }}
//       />
//     </>
//   );
// }


import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* INNER DOT */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: "8px",
          height: "8px",
          backgroundColor: "#FFD400",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      {/* OUTER RING */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: "36px",
          height: "36px",
          border: "2px solid #FFD400",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}
