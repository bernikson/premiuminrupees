import React from "react";

const LOGO = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2000 2000"
      style={{
        enableBackground: "new 0 0 2000 2000",
      }}
      xmlSpace="preserve"
    >
      {"{/**/}"}
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1={928.343}
        y1={1003.212}
        x2={1094.949}
        y2={1668.268}
      >
        <stop
          offset={0}
          style={{
            stopColor: "#0072c5",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#5a9fe9",
          }}
        />
      </linearGradient>
      <path
        d="M1045.38 1655.45c-44.87 0-83.89-30.38-94.9-73.87l-152.9-604.19 247.68 3.18 170.77 674.88h-170.65z"
        style={{
          fill: "url(#a)",
        }}
      />
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1={1697.983}
        y1={279.471}
        x2={817.393}
        y2={831.25}
      >
        <stop
          offset={0}
          style={{
            stopColor: "#0072c5",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#5a9fe9",
          }}
        />
      </linearGradient>
      <path
        d="M921.25 1185.93c-41.73 0-78.03-28.26-88.27-68.71l-43.18-170.6H1167c26.86 0 53.16-11.1 72.14-30.45 18.4-18.76 28.27-43.13 27.79-68.62-1-52.54-44.58-95.29-97.16-95.29H811.52c-41.73 0-78.03-28.26-88.27-68.71l-25.23-99.66h-83.25c-54.85 0-102.56-37.14-116.02-90.31-9.12-36.04-1.25-73.54 21.58-102.87 22.84-29.33 57.26-46.16 94.43-46.16h198.65c41.74 0 78.04 28.26 88.27 68.72l25.23 99.69h241.54c123.49 0 236.84 67.45 295.81 176.04 26.61 48.88 40.68 104.38 40.68 160.45 0 56.07-14.07 111.57-40.7 160.49-58.95 108.55-172.3 176-295.79 176h-247.2z"
        style={{
          fill: "url(#b)",
        }}
      />
    </svg>
  );
};

export default LOGO;
