import React from 'react'

export const Iceberg = () => {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Labels overlay */}
      <div className="pointer-events-none absolute inset-0 whitespace-nowrap text-center text-sm font-semibold text-foreground">
        <div className="absolute left-1/2 top-[16%] z-10 -translate-x-1/2 text-sm text-brand">
          Visible Content
        </div>
        <div className="absolute left-1/2 top-[30%] z-10 -translate-x-1/2 text-secondary">
          Strategy
        </div>
        <div className="absolute left-1/2 top-[46%] z-10 -translate-x-1/2 text-secondary">
          Motivation
        </div>
        <div className="absolute left-1/2 top-[62%] z-10 -translate-x-1/2 text-accent">Problem</div>
        <div className="absolute left-1/2 top-[77%] z-10 -translate-x-1/2 text-lavender-light">
          Goal
        </div>
      </div>
      {/* Updated background: no sky, raised water level */}
      <svg
        viewBox="0 0 1605.22 2360.94"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <rect
          x="0"
          y="600"
          width="1605.22"
          height="1880.94"
          className="fill-[hsl(var(--ice-water))]"
        />
      </svg>

      {/* Floating iceberg in front of static background */}
      <div className="animate-float pointer-events-none absolute inset-0 z-0 flex items-start justify-center">
        <svg
          viewBox="0 0 1605.22 2360.94"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full"
        >
          <g id="below-water-4" className="fill-[hsl(var(--ice-layer-4))]">
            <path d="M1316.46,1714.94H320.37l144.25,123.75s79.99,310.25,79.99,310.25c0,.07,282.99,211.91,282.97,212h.03l62.76-131.83,210.24-154.17,132.94-293.86,82.66-63.14.25-3Z" />
          </g>
          <g id="below-water-3" className="fill-[hsl(var(--ice-layer-3))]">
            <path d="M1391.61,1353.94l-52.33,101.15c-2.42,1.26-21.88,258-22.82,259.85H320.37l-11.53-9.89,1.26-1.48-1.48.32c-.37-2.18-63.88-340.75-64.11-342.61l-.5.89-8.3-8.23h1155.9Z" />
          </g>
          <g id="below-water-2" className="fill-[hsl(var(--ice-layer-2))]">
            <polygon points="1605.22 1045.94 1450.52 1245.98 1441.27 1257.94 1391.61 1353.94 235.71 1353.94 102.94 1222.34 35.55 992.94 1595.79 992.94 1604.93 1044.31 1605.22 1045.94" />
          </g>
          <g id="below-water-1" className="fill-[hsl(var(--ice-layer-1))]">
            <path d="M1595.79,992.94H35.55L0,871.94s122.68-238.81,122.68-238.82h-.14l1.45-1.18h1407.29l.56,1h.53c-1.8.86,63.9,358.85,63.42,360Z" />
          </g>
          <g id="above-water-0" className="fill-[hsl(var(--ice-top))]">
            <path d="M1460.82,495.14s.61-1,.61-1c-1.18.04-1.21.08-1.74-1,.51,2.77-56.38-.71-57,.2.22-.3-108.9-100.32-106.62-100.27-1.03-.9-217.03-103.53-218.43-104.5C1077.72,285.02,822.12,4.91,827.07,0c-.1-.35-198,311.83-200.13,314.82,0,0-37.23-70.73-37.23-70.73,0,0,.51-2.52.51-2.52,0,0-1.26,1.09-1.26,1.09l-.72-1.37s-.49,2.41-.49,2.41c0,0-6.28,5.41-6.28,5.41,0,0-190.38,98.03-190.38,98.03,0,0-36.55,97.2-36.55,97.2,4.63-2.14-230.16,186.56-230.55,187.6,425.76-.54,996.5.17,1413.94,0l-77.1-136.8Z" />
          </g>
        </svg>
      </div>
    </div>
  )
}
